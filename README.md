# address-components

## instalation

`npm install address-components --save`

or

`yarn add address-components`

## usage

```

const { getComponentsForAddress } = require("address-components")

const myFunction = async () => {

  const [components, error] = await getComponentsForAddress(
    "Calle falsa 123, springfield",
    GOOGLE_MAPS_API_KEY
  )

  if (!error) {
    console.log(components)
  } else {
    console.error(error.toString())
  }


}

myFunction()

```


