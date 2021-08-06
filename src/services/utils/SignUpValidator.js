// const regexTester = (arg, reg) => {};

const Validator = {
  id: id => {
    const Regex = /^[a-z]{1}[0-9a-z]+$/;
    if (!Regex.test(id)) return '아이디는 영어로 시작해야합니다.';
    return;
  },
  password: password => {
    const Regex = /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).*$/;
    if (password.length < 8) return '비밀번호는 8자 이상 입니다.';
    if (!Regex.test(password))
      return '비밀번호는 영어/숫자/특수문자가 포함되어야합니다.';
    return;
  },
  passwordConfirm: (confirm, password) => {
    if (confirm === password) return;
    return '비밀번호와 일치하지 않습니다.';
  },
  name: name => {
    const Regex = /^[가-힣]+$/;
    if (!Regex.test(name)) return '이름은 한글만 가능합니다.';
    return;
  },
  address: address => {
    const Regex = /^[가-힣0-9\s\W]+$/;
    if (!Regex.test(address)) return '주소를 정확히 입력해주세요.';
    return;
  },
  age: age => {
    const Regex = /^[0-9]{2,3}$/;
    if (+age >= 80 || +age <= 20)
      return '죄송합니다. 적정 연령의 부모, 선생님만 회원가입이 가능합니다. (최소 20세, 최대 80세)';
    if (!Regex.test(age)) return '나이는 숫자만 가능합니다.';
    return;
  },
  card: (key, value) => {
    const cardNumRegex = /^[0-9\W]+$/;
    const expiredDateRegex = /^[0-9]{2}(\/)[0-9]{2}$/;
    const cvcRegex = /^[0-9]{3}$/;

    const options = {
      cardNum: () => {
        if (!cardNumRegex.test(value)) return '카드번호를 정확히 입력해 주세요';
        if (value.length !== 16) return '카드 번호 정확히 16자리 입력해 주세요';
      },
      expiredDate: () => {
        if (!expiredDateRegex.test(value))
          return '만료일 형식을 확인해주세요 (YY/MM)';
      },
      cvc: () => {
        if (!cvcRegex.test(value) && value.length < 3)
          return 'cvc 3자리 입력해주세요';
      },
    };
    return options[key] && options[key]();
  },
};

export default Validator;
