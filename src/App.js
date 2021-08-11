import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./components/Header";
import Home from "./components/Home";
import { auth } from "./firebase";
import Login from "./components/Login";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <Switch>
                        <Route exact path="/">
                            <div className="flex flex-col h-screen w-screen">
                                <Header user={user} />
                                <Home />
                            </div>
                        </Route>
                        <Route path="/*">
                            <Error />
                        </Route>
                    </Switch>
                )}
            </Router>
        </div>
    );
}

export default App;
