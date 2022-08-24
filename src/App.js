import Todo from './components/Todo';
import TodoFooter from './components/TodoFooter';
import TodoForm from './components/TodoForm';

function App() {
    return (
        <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
            <div className="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg">
                Simple Todo Application with Redux
            </div>

            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <TodoForm />

                <hr className="mt-4" />

                <Todo />

                <hr className="mt-4" />

                <TodoFooter />
            </div>
        </div>
    );
}

export default App;
