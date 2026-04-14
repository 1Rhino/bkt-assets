// JavaScript Document
function isNumber(str)
{
	var test = /[0-9]/;
	return test.test(str);
}
function replacePoint(str)
{
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	return str;
}
function partMonney(str)
{
	str = replacePoint(str);
	var j = 0;
	var temp = "";
	var result = "";
	for(var i = str.length - 1; i >= 0; i--)
	{
		if(j==3)
		{
			temp = "." + temp;
			result = temp + result;
			j = 0;
			temp = "";
		}
		temp = str[i] + temp;
		j++;
		if(i == 0)
		{
			result = temp + result;
		}
	}
	return result;
}

function formatNoAccent(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  return str
}

function convertStringToSlugUrl(string) {
  if (!string) return ''
  string = string.toString().toLowerCase()
  string = formatNoAccent(string)

  return string
    .replace(/\s+/g, '-') // thay khoảng trắng bằng dấu gạch ngang
    .replace(/[^\w\-]+/g, '') // xóa ký tự không hợp lệ
    .replace(/_/g, '-') // thay _ bằng -
    .replace(/\-\-+/g, '-') // xóa các dấu gạch ngang thừa
    .replace(/^-+/, '') // xóa dấu gạch ngang ở đầu chuỗi
    .replace(/-+$/, '') // xóa dấu gạch ngang ở cuối chuỗi
    .substring(0, 200) // chỉ dài tối đa 200 ký tự

}
