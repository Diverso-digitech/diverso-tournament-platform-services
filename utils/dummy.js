export const regForm = {
  steps: ["", "", "", ""],
  fieldsSchema: [
    {
      fields: [
        {
          id: "whatsAppNum",
          variant: "standard",
          label: "whatsAppNum",
          autofocus: true,
          regexType: "numberRegex",
          errorMsg: "whatsAppNumberError",
        },
        {
          id: "teamName",
          variant: "standard",
          label: "teamName",
          regexType: "nameRegex",
          errorMsg: "teamNameError",
        },
        {
          id: "teamLocation",
          variant: "standard",
          label: "teamLocation",
          regexType: "nameRegex",
          errorMsg: "teamLocationError",
        },
        {
          id: "leaderInGameName",
          variant: "standard",
          label: "leaderInGameName",
          regexType: "nameRegex",
          errorMsg: "leaderInGameNameError",
        },
        {
          id: "leaderCharacterId",
          variant: "standard",
          label: "leaderCharacterId",
          regexType: "characterIdRegex",
          errorMsg: "leaderCharacterIdError",
        },
      ],
    },
    {
      fields: [
        {
          id: "player2InGameName",
          variant: "standard",
          label: "player2InGameName",
          autofocus: true,
          regexType: "nameRegex",
          errorMsg: "player2InGameNameError",
        },
        {
          id: "player2CharacterId",
          variant: "standard",
          label: "player2CharacterId",
          regexType: "characterIdRegex",
          errorMsg: "player2CharacterIdError",
        },
      ],
    },
    {
      fields: [
        {
          id: "player3InGameName",
          variant: "standard",
          label: "player3InGameName",
          autofocus: true,
          regexType: "nameRegex",
          errorMsg: "player3InGameNameError",
        },
        {
          id: "player3CharacterId",
          variant: "standard",
          label: "player3CharacterId",
          regexType: "characterIdRegex",
          errorMsg: "player3CharacterIdError",
        },
      ],
    },
    {
      fields: [
        {
          id: "player4InGameName",
          variant: "standard",
          label: "player4InGameName",
          autofocus: true,
          regexType: "nameRegex",
          errorMsg: "player4InGameNameError",
        },
        {
          id: "player4CharacterId",
          variant: "standard",
          label: "player4CharacterId",
          regexType: "characterIdRegex",
          errorMsg: "player4CharacterIdError",
        },
      ],
    },
  ],
};
