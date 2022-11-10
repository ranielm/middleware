```ts
    npm install ..\middleware\ --save-dev
```
or
```ts
    npm install ../middleware/ --save-dev
```
or
```ts
    npm install /path --save-dev
```
in package.json:
```ts
    "middleware": "file:../middleware",
```
Vue Project:
```ts
    <script setup lang="ts">
    import { setHost } from "middleware";

    const hostname = "http://localhost:3000/";
    const formatResponse = setHost(hostname);
    console.log(
    "🚀 ~ file: HelloWorld.vue ~ line 6 ~ formatResponse",
    formatResponse
    );
    </script>
```
Angular Project:
```ts
    import { Component } from '@angular/core';
    import { setHost } from 'middleware';

    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    })
    export class AppComponent {
    title = 'Middleware';

    ngOnInit() {
        const hostname = 'http://localhost:3000/';
        const formatResponse = setHost(hostname);
        console.log(
        '🚀 ~ file: app.component.ts ~ line 15 ~ AppComponent ~ ngOnInit ~ formatResponse',
        formatResponse
        );
        this.title = formatResponse;
    }
    }
```
React Project:
```ts

```
