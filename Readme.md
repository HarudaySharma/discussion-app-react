## Discussion app
*page divided in -> 2 parts*
**RightPane** -> 
                QuestionForm

                  ->Heading

                    -> h1 (Welcome to Discussion Portal !)
                    -> h6 (Enter a subject and question to get started)

                  ->SubjectInput

                    -> input-subject
                    -> input-question

                  ->Button

                    -> submit (btn)

                QuestionAndResponse

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

**LeftPane** ->
                TopBar

                  -> New Question Form (btn) (linked with the Question form in right pane)
                  -> Search questions (input box)

                QuestionsList

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

        - Object design updation  => 


        