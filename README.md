boiler-plate
--

This is an electron app that serves as a boiler plate app for electron.  It is 
based on the electron-quick-start example. It incorporates react, and redux.  The
idea is to take and copy this app and use it as a starting point for a real 
application.

## Running the app
To run boiler-plate:
```bash
$> npm start
```

## CSS Development
boiler-plate uses stylus to development CSS.  The following command puts stylus
in a watch mode that causes a rebuild of the stylus files into `styles.css`
```bash
$> npm run stylus-watch
```

## boiler-plate development
_Work on the entire app while it's running!_
The following command will run boiler-plate in `DEV` mode.  boiler-plate runs, 
but any change to `index.html` or `styles.css` will cause a reload of the app.
```bash
$> npm run dev
```

## License
MIT