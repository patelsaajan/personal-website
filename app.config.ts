
export default defineAppConfig({
    theme: {
      primaryColor: "red",
    },
    ui:{
      input:{
       slots:{
        root: 'bg-primary text-white',
        base: ['bg-primary text-white'],
        leadingIcon: 'text-primary',
       }
      }
    }
  });