import {BoxP} from '../Compound/Box'

export const Mobile = ({postion,scrollPosition})=>{

    return <div>
         {scrollPosition>100 +postion? <BoxP postion={{
            x:130,
            y:75
          }}/> :null }
         {scrollPosition>150 +postion? <BoxP postion={{
            x:150,
            y:80
          }}/> :null }
         {scrollPosition>200 +postion? <BoxP postion={{
            x:170,
            y:85
          }}/> :null }
         {scrollPosition>250 +postion? <BoxP postion={{
            x:190,
            y:90
          }}/> :null }
         {scrollPosition>300 +postion? <BoxP postion={{
            x:220,
            y:100
          }}/> :null }
         {scrollPosition>350 +postion? <BoxP postion={{
            x:240,
            y:105
          }}/> :null }
         {scrollPosition>400 +postion? <BoxP postion={{
            x:270,
            y:110
          }}/> :null }
         {scrollPosition>450 +postion? <BoxP postion={{
            x:250,
            y:120
          }}/> :null }
         {scrollPosition>500 +postion? <BoxP postion={{
            x:220,
            y:130
          }}/> :null }
         {scrollPosition>550 +postion? <BoxP postion={{
            x:195,
            y:145
          }}/> :null }
         {scrollPosition>600 +postion? <BoxP postion={{
            x:165,
            y:160
          }}/> :null }
         {scrollPosition>650 +postion? <BoxP postion={{
            x:135,
            y:180
          }}/> :null }
       
    </div>

}