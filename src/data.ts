
interface IDataFormat {
	title: string,
	value: string,
	type: any,
}

export const sampleFormData: IDataFormat[] = [
	{
		title: 'Name',
		type: {
		  input: 'text',
		},
		value: 'Randall Quaderman',
	},
	{
		title: 'Location',
		type: {
			input: 'text',
		},
		value: 'America',
	},
	{
		title: 'Bio',
		type: {
			input: 'textArea',
		},
		value: ''
	},
	{
		title: 'Status',
		type: {
			input: 'dropdown',
			values: ['Married', 'Single', 'Other']
		},
		value: 'Other',
	},
]
