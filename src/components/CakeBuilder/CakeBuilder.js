import './CakeBuilder.css'
import { Component } from 'react';




class CakeBuilder extends Component {
  constructor(props) {
    super(props);
  }

  cakePlate = (yShift) => {
    return (
      <g>
        <path transform={`translate(0 ${yShift})`} d="M214.75 361.5C333.353 361.5 429.5 300.723 429.5 225.75C429.5 150.777 333.353 90 214.75 90C96.1469 90 0 150.777 0 225.75C0 300.723 96.1469 361.5 214.75 361.5Z" fill="#D9D9D9" />
        <path transform={`translate(0 ${yShift})`} d="M422.5 225.75C422.5 259.99 400.529 292.01 362.86 315.825C325.28 339.58 272.935 354.502 214.75 354.502C156.565 354.502 104.22 339.58 66.64 315.825C28.9715 292.013 7 259.995 7 225.75C7 191.505 28.9705 159.49 66.64 135.675C104.22 111.919 156.565 96.998 214.75 96.998C272.935 96.998 325.28 111.92 362.86 135.675C400.528 159.486 422.5 191.505 422.5 225.75Z" stroke="black" strokeOpacity="0.8" strokeWidth="14" />
        <path transform={`translate(0 ${yShift})`} d="M214.75 337C315.404 337 397 287.192 397 225.75C397 164.308 315.404 114.5 214.75 114.5C114.096 114.5 32.5 164.308 32.5 225.75C32.5 287.192 114.096 337 214.75 337Z" fill="#D9D9D9" />
        <path transform={`translate(0 ${yShift})`} d="M390 225.75C390 253.106 371.807 279.01 339.975 298.44C308.263 317.798 264.005 329.999 214.75 329.999C165.495 329.999 121.24 317.798 89.525 298.44C57.6915 279.008 39.5 253.105 39.5 225.75C39.5 198.396 57.6935 172.49 89.525 153.06C121.238 133.702 165.495 121.501 214.75 121.501C264.005 121.501 308.26 133.702 339.975 153.06C371.809 172.492 390 198.396 390 225.75Z" stroke="black" strokeOpacity="0.5" strokeWidth="14" />
      </g>
    )
  }
  cakeLayer = (yShift, id) => {

    return (
      <path key={yShift} transform={`translate(0 ${yShift})`} d="M338.5 191.5L107 251V293.25L338.5 232.25V191.5Z" fill="#FFB86C" stroke="black" strokeWidth="7.5" strokeLinejoin="round" />
    )
  }
  cakeTop = (yShift) => {
    return (
      <g>
        <path transform={`translate(1 ${yShift})`} d="M339.07 187.548C339.068 187.505 339.063 187.462 339.061 187.419C337.954 168.063 324.671 148.898 299.19 134.125C273.653 119.317 240.51 111.612 207.055 111L106.505 246.29L339.075 187.55L339.07 187.548Z" fill="#EB5989" />
        <path transform={`translate(1 ${yShift})`} d="M106.5 249.747L208.25 112.497C251.333 115.997 337.5 136.497 337.5 190.497M106.5 249.747L337.5 190.497M106.5 249.747V292.997L337.5 233.497V190.497" stroke="black" strokeWidth="7.5" strokeLinejoin="round" />
        <path transform={`translate(1 ${yShift})`} d="M337.5 191.247L106 250.747V292.997L337.5 231.997V191.247Z" fill="#FFB86C" stroke="black" strokeWidth="7.5" strokeLinejoin="round" />
      </g>
    )
  }



  render() {

let heightR = 0;
    
    let result = this.props.data.map((item, index) => {
      let height = heightR;
      heightR = heightR  + (-20 * index);
      return this.cakeLayer(height);
    });

    //result.push(this.cakeTop(this.props. - 20));





    return (
      <div className="cakebuilder">
        <svg width="60vh" height="65vh" viewBox="0 0 430 330" fill="none" xmlns="http://www.w3.org/2000/svg">
          {this.cakePlate(10)}
          {result}
        </svg>
      </div>
    );
  }



}




export default CakeBuilder;