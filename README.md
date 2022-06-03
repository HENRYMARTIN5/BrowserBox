# BrowserBox

> DISCLAIMER: THIS IS A PROJECT MADE FOR FUN! NOTHING YOU DO WITH THIS IS MY RESPONSIBILITY, AND YOU AGREE TO ALL THE TERMS OF THE LICENSE BEFORE USING THIS SOFTWARE!

Hijack a browser tab and use it for remote code execution. You know you want to.

Installing & running:

```sh
cd browserbox && npm i && npm start
```

Then, modify the `hook.js` file to point to your own ip. Add a script pointing to `<YOUR IP>:<YOUR PORT>/hook.js`.

Sending a payload:
Go to `<YOUR IP>:<YOUR PORT>` in a browser, and open the console. Run the function `submitPass(<YOUR BROWSERBOX PASSWORD>)` to mark your socket as an admin socket, then run the function `submitPayload(<YOUR PAYLOAD>)` to send a payload to the server, and out to all the clients.
