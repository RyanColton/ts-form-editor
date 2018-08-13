
export interface IDataFormat {
	title: string,
	value: string,
	type: any,
	rules: any,
}

export const sampleFormData: IDataFormat[] = [
	{
		rules: [
			{
				message: 'Name is required',
				required: true,
			}
		],
		title: 'Name',
		type: {
		  input: 'text',
		},
		value: 'Randall Quaderman',
		
	},
	{
		rules: undefined,
		title: 'Location',
		type: {
			input: 'text',
		},
		value: 'America',
	},
	{
		rules: undefined,
		title: 'Bio',
		type: {
			input: 'textArea',
		},
		value: ''
	},
	{
		rules: undefined,
		title: 'Status',
		type: {
			input: 'dropdown',
			values: ['Married', 'Single', 'Other']
		},
		value: 'Other',
	},
]
