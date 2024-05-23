import FirstComponent from './examples/LearningComponent/firstcomponent';
import ThirdComponent from './examples/LearningComponent/thirdcomponent';
import SecondComponent from './examples/LearningComponent/secondcomponent';
import FourthComponent from './examples/LearningComponent/fourthcomponent';
import { FifthComponent } from './examples/LearningComponent/firstcomponent';
import LearningJavaScript from './examples/LearningComponent/learningJavaScript';

export default function LearningComponent(){
    return(
        <div className="App">
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
            <FourthComponent></FourthComponent>
            <FifthComponent/>
            <LearningJavaScript></LearningJavaScript>
        </div>
    )
}