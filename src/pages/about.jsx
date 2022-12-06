import React, {useEffect} from 'react';

const About = () => {
	useEffect(() => console.log("hello"))
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
    
	<h1>qq is a Computer Science portal for geeks.</h1>
	</div>
);
};

export default About;
