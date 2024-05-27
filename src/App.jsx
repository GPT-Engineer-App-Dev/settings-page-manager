import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import Settings from "@/components/Settings.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <Button onClick={() => setShowSettings(!showSettings)}>{showSettings ? "Go to Home" : "Go to Settings"}</Button>
        {showSettings ? (
          <Settings />
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Hello world!</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is an example</p>
              <hr className="my-4" />
              <Button onClick={() => setCount(count + 1)}>Click me</Button>
              <div>Count: {count}</div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}

export default App;
