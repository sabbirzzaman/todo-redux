import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="grid place-items-center h-full px-6 font-sans">
                <Navbar />

                <div className="w-full max-w-3xl shadow-lg mt-24 rounded-lg p-6 bg-white">
                    <Header />

                    <hr className="mt-4" />

                    <TodoList isCompleted={false} />

                    <hr className="mt-4" />

                    <Footer />
                </div>

                <div className="w-full max-w-3xl shadow-lg my-6 rounded-lg p-6 bg-white">
                    <TodoList isCompleted={true} />
                </div>
            </div>
        </Provider>
    );
}

export default App;
