import './App.css';
import { JsonInterface, JsonGroupInterface } from './resources/jsonInterfaces';
import API_JSON from "./resources/api_result.json";
import Group from './components/Group';

function App(): JSX.Element {
  // apply correct typing to Json
  const jsonResponse: JsonInterface = API_JSON;

  return (
    <main className="container">

      {
        jsonResponse.map((group: JsonGroupInterface): JSX.Element => {
          return (
            <Group
              key={group.name}
              group={group}
            />
          );
        })
      }

    </main >
  );
}

export default App;
