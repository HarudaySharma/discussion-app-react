## Discussion app
### *page divided in -> 2 parts*

#### **RightPane** -> 
##### QuestionForm

                  ->Heading

                    -> h1 (Welcome to Discussion Portal !)
                    -> h6 (Enter a subject and question to get started)

                  ->SubjectInput

                    -> input-subject
                    -> input-question

                  ->Button

                    -> submit (btn)

 ##### QuestionAndResponse

                  -> Question
                    -> heading
                    -> question
                    -> Resolve (btn)

                  -> Response
                    -> Name (h)
                    -> Comment (p)

                  -> AddResponse
                    -> input name (text)
                    -> input comment (text area)

#### **LeftPane** ->
 ##### TopBar

                  -> New Question Form (btn) (linked with the Question form in right pane)
                  -> Search questions (input box)

 ##### QuestionsList

                      -> Subject
                        -> Question



**Working** ->
              QuestionObject = {
                Subject: ,
                Question: ,
                responses: [
                  {
                    Name: ,
                    Comment:
                  }
                ]
              }
             DiscussionApp = [
              {
                
              }
             ]
              


        - Need a communication b/w left and right pane  **DONE**

        - resolving the question (done but object need to be changed)

        - switching b/w different questions(left-pane)  **DONE**

        - Object design updation  => **DONE**
            

// when user submit question and subject => add it to local storage 
=> check if subject is present in the local storage => 
            Discussion-App [ 
                          {
                            Subject: 
                            Questions: [
                              {
                                question:
                                responses: [
                                  {
                                    Name:
                                    Comment:
                                  }
                                ]
                              }
                            ] 
                          }
                        ]

                    Question-Object = {
                      Subject:
                      Questions: [
                        {
                          question:
                          responses: [
                            {
                              Name:
                              Comment:
                            }
                          ]
                        }
                      ]
                    }


           

        


### **searching** :- 

    question
      -> match with questions available 
        -> how ?
          create a new array of subjects 
            will contain only the matching questions with their subjects
              how ?

                - create dummy array
                - traverse thorugh the parent array
                    traverse through the question array of each element
                        store the matched questions into a new array
                      if(array.lenght != 0) {
                        dummyarray.push(
                                        {Subject: subject,
                                        Questions: questionArray}
                                      )
                    }



### on addition of response =>
   store the responses locally till something changes => {
    don't update the state of the parent Array of the root component
    if(right-pane != 'QR' || responseKey Changed) {
      update parent Array State
    }
  }

  reason -> (to halt unresonable re-renders) with addition of a response the root component re-renders, but is in term not necessary
              

###  What I want to achieve =>
    => I want to make sure that the localstorage gets updated only when parent-Array is changed
    => Don't want unneccessary parentArray state changes : 
        - prevent frequent re-renders
        - prevent frequent updation of localStorage

##### **Problem Solved**
        - Changes to local storage is being done by the App component only
##### **Problem Arising**
      => - useEffect hook is not working as aspected for parentArray state  
              - had to explicitly call the updateLocalStorage fnc 


#### Work left => 
  - Save the newly added responses when newQuestionFrom btn is clicked
  - Usking useContext hook for passing the parentArray
  - updating the code so that the local storage get accessed and modified at root component(<app/>)only
  - Adding the search function
  - Setting the display priority of responses based on their likes count(setting a like function with responses)