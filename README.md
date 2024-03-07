# NoDoc.js

NoDoc.js / NoDoc.ts is just a hobby project where instead of writing:
```js
const item = document.getElementById('foo');
```
You can write it like this:
```js
const item = $('>@', 'foo');
```
Or instead of
```js
const item = document.querySelector('bar');
```
You can write:
```
const item = $_(">>", "bar");
```

Isn't that a difference?
=========================
If you want to check out the capabilities of this you can check the source code.

NOTE: I know it is not the best code out there so feel free to modify it how you would like it!
There are still some flaws within $ so I will fix it when I have time.

This is a typescript and javascript version of this. Until I have added it to npm. 
Please just copy the code in your project.

Future update will be moving this to a class.
