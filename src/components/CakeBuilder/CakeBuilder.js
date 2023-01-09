import './CakeBuilder.css'


const cakeClasses = 'cake-layer';

const CakeBottom = () => {
  return (
    <svg fill="none" viewBox="0 0 479 219" xmlns="http://www.w3.org/2000/svg" className={cakeClasses}>
      <path d="M471 8L8 127V211.5L471 89.5V8Z" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />
    </svg>
  );
}


const CakeLayer = () => {
  return (
    <svg fill="none" viewBox="0 0 479 300" xmlns="http://www.w3.org/2000/svg" className={cakeClasses}>
      <path d="M471 8L8 127V211.5L471 89.5V8Z" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />
    </svg>
  );
}



const CakeTop = () => {
  return (
    <svg width="300" height="300" fill="none" viewBox="-50 200 600 200" xmlns="http://www.w3.org/2000/svg" >
      <path d="m474.14 158.1c-5e-3 -0.086-0.014-0.171-0.019-0.256-2.214-38.712-28.78-77.043-79.741-106.59-51.074-29.615-117.36-45.025-184.27-46.249l-201.1 270.58 465.14-117.48z" fill="#EB5989" />
      <path d="M9 282.5L212.5 8C298.667 15 471 56 471 164M9 282.5L471 164M9 282.5V369L471 250V164" stroke="#000" stroke-linejoin="round" stroke-width="15" />
      <path d="M471 165.5L8 284.5V369L471 247V165.5Z" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />
      
      <path d="M471 8L8 127V211.5L471 89.5V8Z"  transform="translate(0 200)" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />
      <path d="M471 8L8 127V211.5L471 89.5V8Z"  transform="translate(0 250)" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />
      <path d="M471 8L8 127V211.5L471 89.5V8Z"  transform="translate(0 300)" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />
      <path d="M471 8L8 127V211.5L471 89.5V8Z"  transform="translate(0 350)" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />
    
    
    
    </svg>
  );
}




const CakeBuilder = (props) => {
  return (

    <div className="cakebuilder">
      {CakeTop()}



    </div>
  );
}

export default CakeBuilder;
