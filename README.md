# Description

This is a simple todo app with react and firebase realtime database.

## install

```sh
npm install
```

# crud

### create

```js
    const ref = firebase.database().ref("your ref");
    // initialize data
    const data = {....}
    //add to db
    ref.push(data);
```

### delete entire data

```js
const ref = firebase.database().ref('your ref');
ref.remove(data);
```

### delete child data

```js
const child = firebase.database().ref('parent').child(id);
child.remove();
```

### update

```js
    //select which child you want to update
    const child = firebase.database().ref("partent").child(id);
    child.update({
        complete:true,
        ...
    })
```

### read

```js
const ref = firebase.database().ref('parent');

ref.on('value', (snapshot) => {
  console.log(snapshot.val());
});

/* this will listen to the parent if there is something change */

ref.once('value', (snapshot) => {
  console.log(snapshot.val());
});
/* this will listen only one time*/
```
