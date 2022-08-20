import Todo from "./components/Todo";
import TodoFooter from "./components/TodoFooter";
import TodoForm from "./components/TodoForm";

function App() {
    return (
        <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
            <div class="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg">
                Simple Todo Application with Redux
            </div>

            <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <TodoForm />

                <hr class="mt-4" />

                <Todo />

                <hr class="mt-4" />

                <TodoFooter />
            </div>
        </div>
    );
}

export default App;
