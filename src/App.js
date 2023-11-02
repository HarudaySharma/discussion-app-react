import logo from './logo.svg';
import './App.css';
import RightPane from './components/rightPane';

function App() {
  return (
    <div className="App">
      <RightPane/>
    </div>
  );
}

export default App;

/*
Discussion app
* page divided in -> 2 parts
** rightPane -> 
                Question form
                  -> h1 (Welcome to Discussion Portal !)
                  -> h6 (Enter a subject and question to get started)
                  -> input-subject
                  -> input-question
                  -> submit (btn)
                Question and response
                  -> Question
                    -> heading
                    -> question
                    -> Resolve (btn)
                  -> Response
                    -> Name (h)
                    -> Comment (p)
                  -> Add response
                    -> input name (text)
                    -> input comment (text area)
    leftPane ->
                buttons
                  -> New Question Form (btn)
                  -> Search questions (input box)
                List Of Questions
                      -> Subject
                      -> Question
*/