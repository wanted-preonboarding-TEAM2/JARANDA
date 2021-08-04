export const idValidation = id => {
  const Regex = /^[a-z]{1}[0-9a-z]+$/;

  if (!Regex.test(id)) {
    return {
      result: false,
      message: '아이디는 영어로 시작해야합니다.',
    };
  }

  return {
    result: true,
  };
};

export const pwValidation = password => {
  const Regex = /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).*$/;

  if (password.length < 8) {
    return {
      result: false,
      message: '비밀번호는 8자 이상 입니다.',
    };
  }

  if (!Regex.test(password)) {
    return {
      result: false,
      message: '비밀번호는 영어/숫자/특수문자가 포함되어야합니다.',
    };
  }

  return { result: true, message: '' };
};

export const nameValidation = name => {
  const Regex = /^[가-힣]+$/;

  if (!Regex.test(name)) {
    return {
      result: false,
      message: '이름은 한글만 가능합니다.',
    };
  }

  return { result: true, message: '' };
};

export const addressValidation = data => {
  const Regex = /^[가-힣0-9\\s]+$/;

  if (!Regex.test(data)) {
    return {
      result: false,
      message: '주소는 한글이나 숫자만 가능합니다',
    };
  }

  return { result: true, message: '' };
};

export const cardValidation = (data, name) => {
  const cardNumRegex = /^[0-9\s]+$/;
  const expiredDateRegex = /^[0-9]{2}(\/)[0-9]{2}$/;
  const cvcRegex = /^[0-9]{3}$/;

  if (name === 'cardNum' && !cardNumRegex.test(data)) {
    return {
      result: false,
      message: '카드번호를 정확히 입력해 주세요',
    };
  }

  if (name === 'cardNum' && data.length < 16) {
    console.log('data.cardNum', data.cardNum);
    return {
      result: false,
      message: '카드 번호 정확히 16자리 입력해 주세요',
    };
  }

  if (name === 'expiredDate' && !expiredDateRegex.test(data)) {
    return {
      result: false,
      message: '만료일 형식을 확인해주세요 (YY/MM)',
    };
  }

  if (name === 'cvc' && !cvcRegex.test(data) && data.length < 3) {
    return {
      result: false,
      message: 'cvc 3자리 입력해주세요',
    };
  }

  return { result: true, message: '' };
};

export const ageValidation = data => {
  const Regex = /^[0-9]{2,3}$/;

  if (data.length > 3) {
    return {
      result: false,
      message: '1000살이 넘으셨나요?',
    };
  }
  if (!Regex.test(data)) {
    return {
      result: false,
      message: '나이는 숫자만 가능합니다',
    };
  }

  return { result: true, message: '' };
};
