enum CourseDifficultyLevelEnum {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  EXPERT = "EXPERT",
}

export const convertDifficultLevel = (level: string): string => {
  switch (level) {
    case CourseDifficultyLevelEnum.BEGINNER: {
      return "Początkujący";
    }
    case CourseDifficultyLevelEnum.INTERMEDIATE: {
      return "Średnio zaawansowany";
    }

    case CourseDifficultyLevelEnum.EXPERT: {
      return "Zaawansowany";
    }

    default: {
      return "";
    }
  }
};
