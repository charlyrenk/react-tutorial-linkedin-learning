// const { createElement } = React
const { render } = ReactDOM

// const style = {
//     backgroundColor: 'orange',
//     color: 'white',
//     fontFamily: 'verdana'
// }

// const title = React.createElement(
//     'h1',
//     {id: 'title', className: 'header', style: style},
//     'Hello World'
// )

// js-X render
render(
    <h1 id="title"
        className='header'
        style={{ 
            backgroundColor: 'orange',
            color: 'white',
            fontFamily: 'verdana'
            }}>
        Hello World
    </h1>,
    document.getElementById('react-container')
)