import TreeOne from '../Components/TreeOne/TreeOne';
import TreeTwo from '../Components/TreeTwo/TreeTwo';
import TreeThree from '../Components/TreeThree/TreeThree';
import Ground from '../Components/Ground/Ground';
import Mansion from '../Components/Mansion/Mansion';
import Danger from '../Components/Danger/Danger';
import Car from '../Components/Car/Car';

const Platform = () => {

    return (
        <> 
            <TreeOne />
            <TreeTwo />
            <TreeThree />
            <Mansion />
            <Ground />
            <Danger />
            <Car />
        </>
    );
}



export default Platform;