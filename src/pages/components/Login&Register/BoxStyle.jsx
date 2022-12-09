// Box Style

/* 
    Eu optei por colocar o desing da box em outro arquivo para não lotar o componente do Header 
*/ 
const styleForm = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    maxWidth: '16em',
    minWidth: '256px',

    textAlign: 'center',

    backgroundColor: "#000",

    boxShadow: '0px 0px 38px rgb(0,0,0,1)',
    borderRadius: '10px',

    color: "#fff",

    '&>h1': {
        fontSize: '17px',
        padding: '0em 1.5em',
    },

    '&>form':
    {
        display: "flex",
        flexDirection: "column",

        '& > label':
        {
            marginTop: '1em',
            marginBottom: '.5em',
        },

        '& > input': {
            borderWidth: '5px',
            borderColor: '#ff6000',
            outline: 'none'
        },

        '& > .submitButton': {
            marginBottom: '1em',
            marginTop: '1.5em',
        },

        '& > .cancelButton': {
            marginBottom: '1em',
        },
    }
}

export default styleForm;