import Section1 from './main/visual/Section_1';
import Section2 from './main/visual/Section_2';
import Section3 from './main/visual/Section_3';


export default function Visual() {

	return (
		<figure className='visual'>
			<Section1 />
			<Section2 />
			<Section3 />
		</figure>
	);
}