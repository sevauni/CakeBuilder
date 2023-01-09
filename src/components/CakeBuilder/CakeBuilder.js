import './CakeBuilder.css'


const cakePlate = (yShift) => {
  return (
    <g>
      <path transform={`translate(0 ${yShift})`} d="M214.75 361.5C333.353 361.5 429.5 300.723 429.5 225.75C429.5 150.777 333.353 90 214.75 90C96.1469 90 0 150.777 0 225.75C0 300.723 96.1469 361.5 214.75 361.5Z" fill="#D9D9D9" />
      <path transform={`translate(0 ${yShift})`} d="M422.5 225.75C422.5 259.99 400.529 292.01 362.86 315.825C325.28 339.58 272.935 354.502 214.75 354.502C156.565 354.502 104.22 339.58 66.64 315.825C28.9715 292.013 7 259.995 7 225.75C7 191.505 28.9705 159.49 66.64 135.675C104.22 111.919 156.565 96.998 214.75 96.998C272.935 96.998 325.28 111.92 362.86 135.675C400.528 159.486 422.5 191.505 422.5 225.75Z" stroke="black" stroke-opacity="0.8" stroke-width="14" />
      <path transform={`translate(0 ${yShift})`} d="M214.75 337C315.404 337 397 287.192 397 225.75C397 164.308 315.404 114.5 214.75 114.5C114.096 114.5 32.5 164.308 32.5 225.75C32.5 287.192 114.096 337 214.75 337Z" fill="#D9D9D9" />
      <path transform={`translate(0 ${yShift})`} d="M390 225.75C390 253.106 371.807 279.01 339.975 298.44C308.263 317.798 264.005 329.999 214.75 329.999C165.495 329.999 121.24 317.798 89.525 298.44C57.6915 279.008 39.5 253.105 39.5 225.75C39.5 198.396 57.6935 172.49 89.525 153.06C121.238 133.702 165.495 121.501 214.75 121.501C264.005 121.501 308.26 133.702 339.975 153.06C371.809 172.492 390 198.396 390 225.75Z" stroke="black" stroke-opacity="0.5" stroke-width="14" />
    </g>
  )
}
const cakeLayer = (yShift) => {
  return (
    <path transform={`translate(0 ${yShift})`} d="M338.5 116.5L107 176V218.25L338.5 157.25V116.5Z" fill="#FFB86C" stroke="black" stroke-width="7.5" stroke-linejoin="round" />
  )
}
const cakeTop = (yShift) => {
  return (
    <g>
      <path transform={`translate(0 ${yShift})`} d="M340.07 81.55C340.068 81.507 340.063 81.4645 340.061 81.422C338.954 62.066 325.671 42.9005 300.19 28.127C274.653 13.3195 241.51 5.6145 208.055 5.0025L107.505 140.292L340.075 81.5525L340.07 81.55Z" fill="#EB5989" />
      <path transform={`translate(0 ${yShift})`} d="M107.5 143.75L209.25 6.5C252.333 10 338.5 30.5 338.5 84.5M107.5 143.75L338.5 84.5M107.5 143.75V187L338.5 127.5V84.5" stroke="black" stroke-width="7.5" stroke-linejoin="round" />
      <path transform={`translate(0 ${yShift})`} d="M338.5 85.25L107 144.75V187L338.5 126V85.25Z" fill="#FFB86C" stroke="black" stroke-width="7.5" stroke-linejoin="round" />
    </g>
  )
}

const CakeBuilder = () => {
let layerAmount = 6;

  let result = [];

  if (layerAmount > 6) {
    return "ERROR! more than 6 layers!"
  }

  if (layerAmount === 1) {
    result.push(cakeTop(90));
  }

  if (layerAmount > 1) {
    result.push(cakeTop(-1));

    for (let index = 0; index < layerAmount; index++) {
      result.push(cakeLayer(70 - index * 20))
    }
  }


  return (
    <div className="cakebuilder">
      <svg width="430" height="370" viewBox="0 0 430 370" fill="none" xmlns="http://www.w3.org/2000/svg">
        {cakePlate(0)}
        {result}
      </svg>
    </div>
  );
}



export default CakeBuilder;
