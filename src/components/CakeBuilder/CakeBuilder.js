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
    <svg width="300" height="300" fill="none" viewBox="-50 150 600 250" xmlns="http://www.w3.org/2000/svg" >

      <ellipse transform="translate(0 -20)"  cx="429.5" cy="271.5" rx="429.5" ry="271.5" fill="#D9D9D9" />
      <path transform="translate(0 -20)"  d="m845 271.5c0 68.481-43.941 132.52-119.28 180.15-75.16 47.51-179.85 77.354-296.22 77.354s-221.06-29.844-296.22-77.354c-75.337-47.623-119.28-111.66-119.28-180.15s43.941-132.52 119.28-180.15c75.16-47.511 179.85-77.354 296.22-77.354s221.06 29.844 296.22 77.354c75.337 47.623 119.28 111.66 119.28 180.15z" stroke="#000" stroke-opacity=".8" stroke-width="28" />
      <ellipse transform="translate(0 -20)"  cx="429.5" cy="271.5" rx="364.5" ry="222.5" fill="#D9D9D9" />
      <path transform="translate(0 -20)" d="m780 271.5c0 54.711-36.387 106.52-100.05 145.38-63.425 38.716-151.94 63.118-250.45 63.118s-187.02-24.402-250.45-63.118c-63.667-38.864-100.05-90.671-100.05-145.38s36.387-106.52 100.05-145.38c63.425-38.716 151.94-63.118 250.45-63.118s187.02 24.402 250.45 63.118c63.667 38.864 100.05 90.671 100.05 145.38z" stroke="#000" stroke-opacity=".5" stroke-width="28" />



      <path transform="translate(0 -20)" d="m474.14 158.1c-5e-3 -0.086-0.014-0.171-0.019-0.256-2.214-38.712-28.78-77.043-79.741-106.59-51.074-29.615-117.36-45.025-184.27-46.249l-201.1 270.58 465.14-117.48z" fill="#EB5989" />
      <path transform="translate(0 -20)" d="M9 282.5L212.5 8C298.667 15 471 56 471 164M9 282.5L471 164M9 282.5V369L471 250V164" stroke="#000" stroke-linejoin="round" stroke-width="15" />
      <path transform="translate(0 -20)" d="M471 165.5L8 284.5V369L471 247V165.5Z" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />

      <path d="M471 8L8 127V211.5L471 89.5V8Z" transform="translate(0 200)" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />
      <path d="M471 8L8 127V211.5L471 89.5V8Z" transform="translate(0 250)" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />
      <path d="M471 8L8 127V211.5L471 89.5V8Z" transform="translate(0 300)" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />
      <path d="M471 8L8 127V211.5L471 89.5V8Z" transform="translate(0 350)" fill="#FFB86C" stroke="#000" stroke-linejoin="round" stroke-width="15" />



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
