# RayChat Package For React

![raychat](./public/raychat-logo.svg)

> Get `token` from [raychat.io](https://raychat.io/signup)

## USE Raychat Package

```
import React from 'react';
import RayChat from "raychat-react";

function App(){
    const token = "6d5b4ba5-xxxx-xxxx-xxxx-48498f3fc2a2";

    return (
        <div>
            <h1>This is a test</h1>
            <RayChat
                rayToken={token}
            />
        </div>
    );
}

```

> Minoo Tavakoli
