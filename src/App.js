import './App.css';
import { Tree } from './components/tree';
import { treeData } from './data';

function App() {
  return (
    <div className="app">
      <div className="col text-center">
        <h2>Tree Visualization component</h2>
        <p className="mt-3">
          <div className="row mt-3 d-flex justify-content-center">
            <div className="col-lg-8 text-left text-dark">
              <Tree data={treeData} />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default App;
