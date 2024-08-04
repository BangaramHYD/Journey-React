import {BoxP} from '../Compound/Box'

export function Route({postion,scrollPosition}){
    // console.log(postion)
    return <div>
        {scrollPosition>100 +postion? <BoxP postion={{
            x:200+20,
            y:120+20
          }}/> :null }
          {scrollPosition>150 +postion? <BoxP postion={{
            x:220+20,
            y:130+20
          }}/> :null }
          {scrollPosition>200 +postion? <BoxP postion={{
            x:240+20,
            y:135+20
          }}/> :null }
          {scrollPosition>250 +postion? <BoxP postion={{
            x:260+20,
            y:140+20
          }}/> :null }
          {scrollPosition>300 +postion? <BoxP postion={{
            x:280+20,
            y:145+20
          }}/> :null }
          {scrollPosition>350 +postion? <BoxP postion={{
            x:300+20,
            y:150+20
          }}/> :null }
          {scrollPosition>400 +postion ? <BoxP postion={{
            x:320+20,
            y:155+20
          }}/> :null }
          {scrollPosition>450 +postion ? <BoxP postion={{
            x:380,
            y:185
          }}/> :null }
          {scrollPosition>500 +postion ? <BoxP postion={{
            x:410,
            y:190
          }}/> :null }
          {scrollPosition>550 +postion ? <BoxP postion={{
            x:450,
            y:200
          }}/> :null }
          {scrollPosition>600 +postion ? <BoxP postion={{
            x:490,
            y:210
          }}/> :null }
          {scrollPosition>650 +postion ? <BoxP postion={{
            x:520,
            y:220
          }}/> :null }
          {scrollPosition>700 +postion ? <BoxP postion={{
            x:520,
            y:250
          }}/> :null }
          {scrollPosition>750 +postion ? <BoxP postion={{
            x:500,
            y:260
          }}/> :null }
          {scrollPosition>800 +postion ? <BoxP postion={{
            x:470,
            y:280
          }}/> :null }
          {scrollPosition>800 +postion ? <BoxP postion={{
            x:420,
            y:310
          }}/> :null }
          {scrollPosition>800 +postion ? <BoxP postion={{
            x:390,
            y:330
          }}/> :null }
          {scrollPosition>850 +postion ? <BoxP postion={{
            x:330,
            y:380
          }}/> :null }
          {scrollPosition>900 +postion ? <BoxP postion={{
            x:300,
            y:410
          }}/> :null }
    </div>
  }