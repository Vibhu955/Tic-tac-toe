import ConvertApi from 'convertapi-js'

let convertApi = ConvertApi.auth('LMh25vIfApOJLTgW');
let params = convertApi.createParams();
params.add('Files', elFileInput.files);
params.add('FileName', 'Executive');
let result = await convertApi.convert('images', 'pdf', params);