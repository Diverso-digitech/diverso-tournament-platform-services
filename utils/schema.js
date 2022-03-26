export const getInputObject = (
  index,
  label,
  regexType,
  errorMsg,
  variant = "standard"
) => ({
  id: label,
  label,
  variant,
  regexType,
  errorMsg,
  ...(index === 0 && { autofocus: true }),
});

export const regFormGenerator = (details) => {
  const schema = {};

  const len = details.length;

  schema["steps"] = Array.apply(null, Array(len)).map(() => "");
  schema["fieldsSchema"] = details.map((page) => {
    return {
      fields: page.map((inp, idx) => {
        const { label, regexType, errorMsg } = inp;
        return getInputObject(idx, label, regexType, errorMsg);
      }),
    };
  });

  return schema;
};

export const formSchema = [
  [
    {
      label: "whatsAppNum",
      regexType: "numberRegex",
      errorMsg: "whatsAppNumberError",
    },
    {
      label: "teamName",
      regexType: "nameRegex",
      errorMsg: "teamNameError",
    },
    {
      label: "teamLocation",
      regexType: "nameRegex",
      errorMsg: "teamLocationError",
    },
    {
      label: "leaderInGameName",
      regexType: "nameRegex",
      errorMsg: "leaderInGameNameError",
    },
    {
      label: "leaderCharacterId",
      regexType: "characterIdRegex",
      errorMsg: "leaderCharacterIdError",
    },
  ],
  [
    {
      label: "player2InGameName",
      regexType: "nameRegex",
      errorMsg: "player2InGameNameError",
    },
    {
      label: "player2CharacterId",
      regexType: "characterIdRegex",
      errorMsg: "player2CharacterIdError",
    },
  ],
  [
    {
      label: "player3InGameName",
      regexType: "nameRegex",
      errorMsg: "player3InGameNameError",
    },
    {
      label: "player3CharacterId",
      regexType: "characterIdRegex",
      errorMsg: "player3CharacterIdError",
    },
  ],
  [
    {
      label: "player4InGameName",
      regexType: "nameRegex",
      errorMsg: "player4InGameNameError",
    },
    {
      label: "player4CharacterId",
      regexType: "characterIdRegex",
      errorMsg: "player4CharacterIdError",
    },
  ],
];
