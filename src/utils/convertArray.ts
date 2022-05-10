/*eslint-disable*/
interface myFunction {
        (array: unknown[], label: string, value?: string): unknown[];  
    }

const convertArray:myFunction = (array, label, value) => {
	const newArray:any = [];
	array?.map((item:any)=> {
		if(!value){
			newArray.push({label:item[label], value:item[label]});
		}else{
			newArray.push({
				label: item[label],
				value: item[value]
			});
		}
	});
	return newArray;
};
export default convertArray;