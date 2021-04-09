export const isNicknameValid = (nickname: string) => {
  if (/admin|twitter/.test(nickname.toLowerCase())) {
    return false;
  }

  return /^[a-zA-Z0-9_]{4,15}$/.test(nickname);
};
