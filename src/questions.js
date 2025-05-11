const questions = [
  {
    id: "Q1a",
    module: 1,
    question: "What is a key reason why: What is the purpose of the CRISP-DM framework?",
    options: ["It avoids the need for business involvement.", "It eliminates the need for data validation.", "It ensures effective handling of: what is the purpose of the crisp-dm framework.", "It simplifies stakeholder communication only."],
    answer: 2
  },
  {
    id: "Q1b",
    module: 1,
    question: "Which of the following best reflects the concept behind: What is the purpose of the CRISP-DM framework?",
    options: ["It automates result interpretation only.", "It skips problem formulation phase.", "It aligns project execution with the intention behind: what is the purpose of the crisp-dm framework.", "It reduces analytical objectivity."],
    answer: 2
  },
  {
    id: "Q2a",
    module: 1,
    question: "What is a key reason why: Why are KPIs (Key Performance Indicators) important in analytics projects?",
    options: ["It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It eliminates the need for data validation.", "It ensures effective handling of: why are kpis (key performance indicators) important in analytics projects."],
    answer: 3
  },
  {
    id: "Q2b",
    module: 1,
    question: "Which of the following best reflects the concept behind: Why are KPIs (Key Performance Indicators) important in analytics projects?",
    options: ["It automates result interpretation only.", "It reduces analytical objectivity.", "It skips problem formulation phase.", "It aligns project execution with the intention behind: why are kpis (key performance indicators) important in analytics projects."],
    answer: 3
  },
  {
    id: "Q3a",
    module: 1,
    question: "What is a key reason why: What should you do if the business question cannot be directly answered with available data?",
    options: ["It avoids the need for business involvement.", "It eliminates the need for data validation.", "It ensures effective handling of: what should you do if the business question cannot be directly answered with available data.", "It simplifies stakeholder communication only."],
    answer: 2
  },
  {
    id: "Q3b",
    module: 1,
    question: "Which of the following best reflects the concept behind: What should you do if the business question cannot be directly answered with available data?",
    options: ["It reduces analytical objectivity.", "It aligns project execution with the intention behind: what should you do if the business question cannot be directly answered with available data.", "It automates result interpretation only.", "It skips problem formulation phase."],
    answer: 1
  },
  {
    id: "Q4a",
    module: 1,
    question: "What is a key reason why: How can you translate a general business need into a specific data analysis question?",
    options: ["It simplifies stakeholder communication only.", "It ensures effective handling of: how can you translate a general business need into a specific data analysis question.", "It avoids the need for business involvement.", "It eliminates the need for data validation."],
    answer: 1
  },
  {
    id: "Q4b",
    module: 1,
    question: "Which of the following best reflects the concept behind: How can you translate a general business need into a specific data analysis question?",
    options: ["It automates result interpretation only.", "It reduces analytical objectivity.", "It skips problem formulation phase.", "It aligns project execution with the intention behind: how can you translate a general business need into a specific data analysis question."],
    answer: 3
  },
  {
    id: "Q5a",
    module: 1,
    question: "What is a key reason why: Why is it important for a data analyst to question and clarify initial business requests?",
    options: ["It simplifies stakeholder communication only.", "It ensures effective handling of: why is it important for a data analyst to question and clarify initial business requests.", "It eliminates the need for data validation.", "It avoids the need for business involvement."],
    answer: 1
  },
  {
    id: "Q5b",
    module: 1,
    question: "Which of the following best reflects the concept behind: Why is it important for a data analyst to question and clarify initial business requests?",
    options: ["It aligns project execution with the intention behind: why is it important for a data analyst to question and clarify initial business requests.", "It automates result interpretation only.", "It skips problem formulation phase.", "It reduces analytical objectivity."],
    answer: 0
  },
  {
    id: "Q6a",
    module: 1,
    question: "What is a key reason why: What strategies can a data analyst use to uncover the true business need behind a vague request?",
    options: ["It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It ensures effective handling of: what strategies can a data analyst use to uncover the true business need behind a vague request.", "It eliminates the need for data validation."],
    answer: 2
  },
  {
    id: "Q6b",
    module: 1,
    question: "Which of the following best reflects the concept behind: What strategies can a data analyst use to uncover the true business need behind a vague request?",
    options: ["It aligns project execution with the intention behind: what strategies can a data analyst use to uncover the true business need behind a vague request.", "It automates result interpretation only.", "It skips problem formulation phase.", "It reduces analytical objectivity."],
    answer: 0
  },
  {
    id: "Q7a",
    module: 1,
    question: "What is a key reason why: How can you distinguish between a symptom and the root cause in a business problem?",
    options: ["It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It ensures effective handling of: how can you distinguish between a symptom and the root cause in a business problem."],
    answer: 3
  },
  {
    id: "Q7b",
    module: 1,
    question: "Which of the following best reflects the concept behind: How can you distinguish between a symptom and the root cause in a business problem?",
    options: ["It skips problem formulation phase.", "It aligns project execution with the intention behind: how can you distinguish between a symptom and the root cause in a business problem.", "It reduces analytical objectivity.", "It automates result interpretation only."],
    answer: 1
  },
  {
    id: "Q8a",
    module: 1,
    question: "What is a key reason why: Why is it important for a data analyst to propose deeper insights than what the business explicitly asks for?",
    options: ["It avoids the need for business involvement.", "It ensures effective handling of: why is it important for a data analyst to propose deeper insights than what the business explicitly asks for.", "It eliminates the need for data validation.", "It simplifies stakeholder communication only."],
    answer: 1
  },
  {
    id: "Q8b",
    module: 1,
    question: "Which of the following best reflects the concept behind: Why is it important for a data analyst to propose deeper insights than what the business explicitly asks for?",
    options: ["It aligns project execution with the intention behind: why is it important for a data analyst to propose deeper insights than what the business explicitly asks for.", "It reduces analytical objectivity.", "It skips problem formulation phase.", "It automates result interpretation only."],
    answer: 0
  },
  {
    id: "Q9a",
    module: 1,
    question: "What is a key reason why: What are good practices for translating business goals into measurable analytical objectives?",
    options: ["It eliminates the need for data validation.", "It avoids the need for business involvement.", "It simplifies stakeholder communication only.", "It ensures effective handling of: what are good practices for translating business goals into measurable analytical objectives."],
    answer: 3
  },
  {
    id: "Q9b",
    module: 1,
    question: "Which of the following best reflects the concept behind: What are good practices for translating business goals into measurable analytical objectives?",
    options: ["It aligns project execution with the intention behind: what are good practices for translating business goals into measurable analytical objectives.", "It skips problem formulation phase.", "It automates result interpretation only.", "It reduces analytical objectivity."],
    answer: 0
  },
  {
    id: "Q10a",
    module: 1,
    question: "What is a key reason why: When do we say that a sample is biased for the population under study?",
    options: ["It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It eliminates the need for data validation.", "It ensures effective handling of: when do we say that a sample is biased for the population under study."],
    answer: 3
  },
  {
    id: "Q10b",
    module: 1,
    question: "Which of the following best reflects the concept behind: When do we say that a sample is biased for the population under study?",
    options: ["It skips problem formulation phase.", "It aligns project execution with the intention behind: when do we say that a sample is biased for the population under study.", "It automates result interpretation only.", "It reduces analytical objectivity."],
    answer: 1
  },
  {
    id: "Q11a",
    module: 2,
    question: "What is a key reason why: What is the difference between structured and unstructured data?",
    options: ["It avoids the need for business involvement.", "It simplifies stakeholder communication only.", "It ensures effective handling of: what is the difference between structured and unstructured data.", "It eliminates the need for data validation."],
    answer: 2
  },
  {
    id: "Q11b",
    module: 2,
    question: "Which of the following best reflects the concept behind: What is the difference between structured and unstructured data?",
    options: ["It aligns project execution with the intention behind: what is the difference between structured and unstructured data.", "It reduces analytical objectivity.", "It skips problem formulation phase.", "It automates result interpretation only."],
    answer: 0
  },
  {
    id: "Q12a",
    module: 2,
    question: "What is a key reason why: What is the first thing you should check when receiving a new dataset?",
    options: ["It eliminates the need for data validation.", "It avoids the need for business involvement.", "It ensures effective handling of: what is the first thing you should check when receiving a new dataset.", "It simplifies stakeholder communication only."],
    answer: 2
  },
  {
    id: "Q12b",
    module: 2,
    question: "Which of the following best reflects the concept behind: What is the first thing you should check when receiving a new dataset?",
    options: ["It aligns project execution with the intention behind: what is the first thing you should check when receiving a new dataset.", "It reduces analytical objectivity.", "It skips problem formulation phase.", "It automates result interpretation only."],
    answer: 0
  },
  {
    id: "Q13a",
    module: 2,
    question: "What is a key reason why: What is typically the first activity when starting to explore a new dataset?",
    options: ["It ensures effective handling of: what is typically the first activity when starting to explore a new dataset.", "It eliminates the need for data validation.", "It avoids the need for business involvement.", "It simplifies stakeholder communication only."],
    answer: 0
  },
  {
    id: "Q13b",
    module: 2,
    question: "Which of the following best reflects the concept behind: What is typically the first activity when starting to explore a new dataset?",
    options: ["It automates result interpretation only.", "It aligns project execution with the intention behind: what is typically the first activity when starting to explore a new dataset.", "It reduces analytical objectivity.", "It skips problem formulation phase."],
    answer: 1
  },
  {
    id: "Q14a",
    module: 2,
    question: "What is a key reason why: What does data granularity mean in the context of a dataset?",
    options: ["It ensures effective handling of: what does data granularity mean in the context of a dataset.", "It simplifies stakeholder communication only.", "It eliminates the need for data validation.", "It avoids the need for business involvement."],
    answer: 0
  },
  {
    id: "Q14b",
    module: 2,
    question: "Which of the following best reflects the concept behind: What does data granularity mean in the context of a dataset?",
    options: ["It automates result interpretation only.", "It reduces analytical objectivity.", "It skips problem formulation phase.", "It aligns project execution with the intention behind: what does data granularity mean in the context of a dataset."],
    answer: 3
  },
  {
    id: "Q15a",
    module: 2,
    question: "What is a key reason why: What does it mean if a variable has high cardinality?",
    options: ["It simplifies stakeholder communication only.", "It eliminates the need for data validation.", "It avoids the need for business involvement.", "It ensures effective handling of: what does it mean if a variable has high cardinality."],
    answer: 3
  },
  {
    id: "Q15b",
    module: 2,
    question: "Which of the following best reflects the concept behind: What does it mean if a variable has high cardinality?",
    options: ["It aligns project execution with the intention behind: what does it mean if a variable has high cardinality.", "It skips problem formulation phase.", "It reduces analytical objectivity.", "It automates result interpretation only."],
    answer: 0
  },
  {
    id: "Q16a",
    module: 2,
    question: "What is a key reason why: How can you identify relationships between two categorical variables?",
    options: ["It avoids the need for business involvement.", "It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It ensures effective handling of: how can you identify relationships between two categorical variables."],
    answer: 3
  },
  {
    id: "Q16b",
    module: 2,
    question: "Which of the following best reflects the concept behind: How can you identify relationships between two categorical variables?",
    options: ["It automates result interpretation only.", "It reduces analytical objectivity.", "It aligns project execution with the intention behind: how can you identify relationships between two categorical variables.", "It skips problem formulation phase."],
    answer: 2
  },
  {
    id: "Q17a",
    module: 2,
    question: "What is a key reason why: How would you explore the distribution of a continuous variable?",
    options: ["It ensures effective handling of: how would you explore the distribution of a continuous variable.", "It avoids the need for business involvement.", "It eliminates the need for data validation.", "It simplifies stakeholder communication only."],
    answer: 0
  },
  {
    id: "Q17b",
    module: 2,
    question: "Which of the following best reflects the concept behind: How would you explore the distribution of a continuous variable?",
    options: ["It skips problem formulation phase.", "It reduces analytical objectivity.", "It automates result interpretation only.", "It aligns project execution with the intention behind: how would you explore the distribution of a continuous variable."],
    answer: 3
  },
  {
    id: "Q18a",
    module: 2,
    question: "What is a key reason why: What risks can arise if the metadata or data dictionary is missing or incomplete?",
    options: ["It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It ensures effective handling of: what risks can arise if the metadata or data dictionary is missing or incomplete."],
    answer: 3
  },
  {
    id: "Q18b",
    module: 2,
    question: "Which of the following best reflects the concept behind: What risks can arise if the metadata or data dictionary is missing or incomplete?",
    options: ["It reduces analytical objectivity.", "It aligns project execution with the intention behind: what risks can arise if the metadata or data dictionary is missing or incomplete.", "It skips problem formulation phase.", "It automates result interpretation only."],
    answer: 1
  },
  {
    id: "Q19a",
    module: 2,
    question: "What is a key reason why: What clues help you recognize whether the data is at a transactional or aggregated level?",
    options: ["It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It ensures effective handling of: what clues help you recognize whether the data is at a transactional or aggregated level.", "It eliminates the need for data validation."],
    answer: 2
  },
  {
    id: "Q19b",
    module: 2,
    question: "Which of the following best reflects the concept behind: What clues help you recognize whether the data is at a transactional or aggregated level?",
    options: ["It skips problem formulation phase.", "It reduces analytical objectivity.", "It aligns project execution with the intention behind: what clues help you recognize whether the data is at a transactional or aggregated level.", "It automates result interpretation only."],
    answer: 2
  },
  {
    id: "Q20a",
    module: 2,
    question: "What is a key reason why: How would you check if the dataset covers the full time period it should?",
    options: ["It avoids the need for business involvement.", "It eliminates the need for data validation.", "It ensures effective handling of: how would you check if the dataset covers the full time period it should.", "It simplifies stakeholder communication only."],
    answer: 2
  },
  {
    id: "Q20b",
    module: 2,
    question: "Which of the following best reflects the concept behind: How would you check if the dataset covers the full time period it should?",
    options: ["It skips problem formulation phase.", "It reduces analytical objectivity.", "It automates result interpretation only.", "It aligns project execution with the intention behind: how would you check if the dataset covers the full time period it should."],
    answer: 3
  },
  {
    id: "Q21a",
    module: 3,
    question: "What is a key reason why: How can you verify whether categorical variables are coded consistently?",
    options: ["It ensures effective handling of: how can you verify whether categorical variables are coded consistently.", "It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It avoids the need for business involvement."],
    answer: 0
  },
  {
    id: "Q21b",
    module: 3,
    question: "Which of the following best reflects the concept behind: How can you verify whether categorical variables are coded consistently?",
    options: ["It automates result interpretation only.", "It reduces analytical objectivity.", "It aligns project execution with the intention behind: how can you verify whether categorical variables are coded consistently.", "It skips problem formulation phase."],
    answer: 2
  },
  {
    id: "Q22a",
    module: 3,
    question: "What is a key reason why: How can you explore if two variables have a relationship between them?",
    options: ["It avoids the need for business involvement.", "It ensures effective handling of: how can you explore if two variables have a relationship between them.", "It simplifies stakeholder communication only.", "It eliminates the need for data validation."],
    answer: 1
  },
  {
    id: "Q22b",
    module: 3,
    question: "Which of the following best reflects the concept behind: How can you explore if two variables have a relationship between them?",
    options: ["It aligns project execution with the intention behind: how can you explore if two variables have a relationship between them.", "It automates result interpretation only.", "It reduces analytical objectivity.", "It skips problem formulation phase."],
    answer: 0
  },
  {
    id: "Q23a",
    module: 3,
    question: "What is a key reason why: What are some common sources of bias in a dataset?",
    options: ["It avoids the need for business involvement.", "It ensures effective handling of: what are some common sources of bias in a dataset.", "It eliminates the need for data validation.", "It simplifies stakeholder communication only."],
    answer: 1
  },
  {
    id: "Q23b",
    module: 3,
    question: "Which of the following best reflects the concept behind: What are some common sources of bias in a dataset?",
    options: ["It aligns project execution with the intention behind: what are some common sources of bias in a dataset.", "It skips problem formulation phase.", "It automates result interpretation only.", "It reduces analytical objectivity."],
    answer: 0
  },
  {
    id: "Q24a",
    module: 3,
    question: "What is a key reason why: How would you check if numeric variables have values that fall outside of expected ranges?",
    options: ["It avoids the need for business involvement.", "It ensures effective handling of: how would you check if numeric variables have values that fall outside of expected ranges.", "It simplifies stakeholder communication only.", "It eliminates the need for data validation."],
    answer: 1
  },
  {
    id: "Q24b",
    module: 3,
    question: "Which of the following best reflects the concept behind: How would you check if numeric variables have values that fall outside of expected ranges?",
    options: ["It automates result interpretation only.", "It aligns project execution with the intention behind: how would you check if numeric variables have values that fall outside of expected ranges.", "It reduces analytical objectivity.", "It skips problem formulation phase."],
    answer: 1
  },
  {
    id: "Q25a",
    module: 3,
    question: "What is a key reason why: What does imputation mean in data preparation?",
    options: ["It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It eliminates the need for data validation.", "It ensures effective handling of: what does imputation mean in data preparation."],
    answer: 3
  },
  {
    id: "Q25b",
    module: 3,
    question: "Which of the following best reflects the concept behind: What does imputation mean in data preparation?",
    options: ["It automates result interpretation only.", "It skips problem formulation phase.", "It aligns project execution with the intention behind: what does imputation mean in data preparation.", "It reduces analytical objectivity."],
    answer: 2
  },
  {
    id: "Q26a",
    module: 3,
    question: "What is a key reason why: How would you handle extreme outliers that seem to be valid?",
    options: ["It simplifies stakeholder communication only.", "It eliminates the need for data validation.", "It ensures effective handling of: how would you handle extreme outliers that seem to be valid.", "It avoids the need for business involvement."],
    answer: 2
  },
  {
    id: "Q26b",
    module: 3,
    question: "Which of the following best reflects the concept behind: How would you handle extreme outliers that seem to be valid?",
    options: ["It reduces analytical objectivity.", "It skips problem formulation phase.", "It aligns project execution with the intention behind: how would you handle extreme outliers that seem to be valid.", "It automates result interpretation only."],
    answer: 2
  },
  {
    id: "Q27a",
    module: 3,
    question: "What is a key reason why: What are the risks of simply deleting all rows with missing values?",
    options: ["It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It ensures effective handling of: what are the risks of simply deleting all rows with missing values.", "It eliminates the need for data validation."],
    answer: 2
  },
  {
    id: "Q27b",
    module: 3,
    question: "Which of the following best reflects the concept behind: What are the risks of simply deleting all rows with missing values?",
    options: ["It aligns project execution with the intention behind: what are the risks of simply deleting all rows with missing values.", "It automates result interpretation only.", "It skips problem formulation phase.", "It reduces analytical objectivity."],
    answer: 0
  },
  {
    id: "Q28a",
    module: 3,
    question: "What is a key reason why: What is the purpose of feature scaling?",
    options: ["It avoids the need for business involvement.", "It ensures effective handling of: what is the purpose of feature scaling.", "It simplifies stakeholder communication only.", "It eliminates the need for data validation."],
    answer: 1
  },
  {
    id: "Q28b",
    module: 3,
    question: "Which of the following best reflects the concept behind: What is the purpose of feature scaling?",
    options: ["It aligns project execution with the intention behind: what is the purpose of feature scaling.", "It skips problem formulation phase.", "It reduces analytical objectivity.", "It automates result interpretation only."],
    answer: 0
  },
  {
    id: "Q29a",
    module: 3,
    question: "What is a key reason why: When would you prefer standardization over normalization?",
    options: ["It simplifies stakeholder communication only.", "It eliminates the need for data validation.", "It ensures effective handling of: when would you prefer standardization over normalization.", "It avoids the need for business involvement."],
    answer: 2
  },
  {
    id: "Q29b",
    module: 3,
    question: "Which of the following best reflects the concept behind: When would you prefer standardization over normalization?",
    options: ["It aligns project execution with the intention behind: when would you prefer standardization over normalization.", "It automates result interpretation only.", "It skips problem formulation phase.", "It reduces analytical objectivity."],
    answer: 0
  },
  {
    id: "Q30a",
    module: 3,
    question: "What is a key reason why: What does it mean to create a derived feature?",
    options: ["It avoids the need for business involvement.", "It simplifies stakeholder communication only.", "It ensures effective handling of: what does it mean to create a derived feature.", "It eliminates the need for data validation."],
    answer: 2
  },
  {
    id: "Q30b",
    module: 3,
    question: "Which of the following best reflects the concept behind: What does it mean to create a derived feature?",
    options: ["It reduces analytical objectivity.", "It aligns project execution with the intention behind: what does it mean to create a derived feature.", "It automates result interpretation only.", "It skips problem formulation phase."],
    answer: 1
  },
  {
    id: "Q31a",
    module: 4,
    question: "What is a key reason why: How can one-hot encoding impact the complexity of a model?",
    options: ["It simplifies stakeholder communication only.", "It ensures effective handling of: how can one-hot encoding impact the complexity of a model.", "It avoids the need for business involvement.", "It eliminates the need for data validation."],
    answer: 1
  },
  {
    id: "Q31b",
    module: 4,
    question: "Which of the following best reflects the concept behind: How can one-hot encoding impact the complexity of a model?",
    options: ["It skips problem formulation phase.", "It aligns project execution with the intention behind: how can one-hot encoding impact the complexity of a model.", "It automates result interpretation only.", "It reduces analytical objectivity."],
    answer: 1
  },
  {
    id: "Q32a",
    module: 4,
    question: "What is a key reason why: What is binning, and when might it be useful?",
    options: ["It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It ensures effective handling of: what is binning, and when might it be useful.", "It avoids the need for business involvement."],
    answer: 2
  },
  {
    id: "Q32b",
    module: 4,
    question: "Which of the following best reflects the concept behind: What is binning, and when might it be useful?",
    options: ["It automates result interpretation only.", "It reduces analytical objectivity.", "It skips problem formulation phase.", "It aligns project execution with the intention behind: what is binning, and when might it be useful."],
    answer: 3
  },
  {
    id: "Q33a",
    module: 4,
    question: "What is a key reason why: Why might you want to remove highly correlated features?",
    options: ["It avoids the need for business involvement.", "It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It ensures effective handling of: why might you want to remove highly correlated features."],
    answer: 3
  },
  {
    id: "Q33b",
    module: 4,
    question: "Which of the following best reflects the concept behind: Why might you want to remove highly correlated features?",
    options: ["It automates result interpretation only.", "It reduces analytical objectivity.", "It aligns project execution with the intention behind: why might you want to remove highly correlated features.", "It skips problem formulation phase."],
    answer: 2
  },
  {
    id: "Q34a",
    module: 4,
    question: "What is a key reason why: How would you handle text data before feeding it into a machine learning model?",
    options: ["It eliminates the need for data validation.", "It ensures effective handling of: how would you handle text data before feeding it into a machine learning model.", "It avoids the need for business involvement.", "It simplifies stakeholder communication only."],
    answer: 1
  },
  {
    id: "Q34b",
    module: 4,
    question: "Which of the following best reflects the concept behind: How would you handle text data before feeding it into a machine learning model?",
    options: ["It reduces analytical objectivity.", "It skips problem formulation phase.", "It automates result interpretation only.", "It aligns project execution with the intention behind: how would you handle text data before feeding it into a machine learning model."],
    answer: 3
  },
  {
    id: "Q35a",
    module: 4,
    question: "What is a key reason why: What is the difference between exploratory and explanatory visualizations?",
    options: ["It ensures effective handling of: what is the difference between exploratory and explanatory visualizations.", "It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It avoids the need for business involvement."],
    answer: 0
  },
  {
    id: "Q35b",
    module: 4,
    question: "Which of the following best reflects the concept behind: What is the difference between exploratory and explanatory visualizations?",
    options: ["It aligns project execution with the intention behind: what is the difference between exploratory and explanatory visualizations.", "It automates result interpretation only.", "It reduces analytical objectivity.", "It skips problem formulation phase."],
    answer: 0
  },
  {
    id: "Q36a",
    module: 4,
    question: "What is a key reason why: Why might boxplots be preferred over histograms when analyzing outliers?",
    options: ["It avoids the need for business involvement.", "It simplifies stakeholder communication only.", "It eliminates the need for data validation.", "It ensures effective handling of: why might boxplots be preferred over histograms when analyzing outliers."],
    answer: 3
  },
  {
    id: "Q36b",
    module: 4,
    question: "Which of the following best reflects the concept behind: Why might boxplots be preferred over histograms when analyzing outliers?",
    options: ["It reduces analytical objectivity.", "It aligns project execution with the intention behind: why might boxplots be preferred over histograms when analyzing outliers.", "It automates result interpretation only.", "It skips problem formulation phase."],
    answer: 1
  },
  {
    id: "Q37a",
    module: 4,
    question: "What is a key reason why: What is a heatmap useful for?",
    options: ["It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It ensures effective handling of: what is a heatmap useful for."],
    answer: 3
  },
  {
    id: "Q37b",
    module: 4,
    question: "Which of the following best reflects the concept behind: What is a heatmap useful for?",
    options: ["It reduces analytical objectivity.", "It automates result interpretation only.", "It aligns project execution with the intention behind: what is a heatmap useful for.", "It skips problem formulation phase."],
    answer: 2
  },
  {
    id: "Q38a",
    module: 4,
    question: "What is a key reason why: How does Tableau aggregate continuous variables by default? What function does it use?",
    options: ["It simplifies stakeholder communication only.", "It ensures effective handling of: how does tableau aggregate continuous variables by default.", "It avoids the need for business involvement.", "It eliminates the need for data validation."],
    answer: 1
  },
  {
    id: "Q38b",
    module: 4,
    question: "Which of the following best reflects the concept behind: How does Tableau aggregate continuous variables by default? What function does it use?",
    options: ["It automates result interpretation only.", "It skips problem formulation phase.", "It reduces analytical objectivity.", "It aligns project execution with the intention behind: how does tableau aggregate continuous variables by default."],
    answer: 3
  },
  {
    id: "Q39a",
    module: 4,
    question: "What is a key reason why: What is the goal of clustering algorithms?",
    options: ["It ensures effective handling of: what is the goal of clustering algorithms.", "It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It eliminates the need for data validation."],
    answer: 0
  },
  {
    id: "Q39b",
    module: 4,
    question: "Which of the following best reflects the concept behind: What is the goal of clustering algorithms?",
    options: ["It reduces analytical objectivity.", "It automates result interpretation only.", "It aligns project execution with the intention behind: what is the goal of clustering algorithms.", "It skips problem formulation phase."],
    answer: 2
  },
  {
    id: "Q40a",
    module: 4,
    question: "What is a key reason why: What are ensemble methods, and why are they often used?",
    options: ["It eliminates the need for data validation.", "It ensures effective handling of: what are ensemble methods, and why are they often used.", "It simplifies stakeholder communication only.", "It avoids the need for business involvement."],
    answer: 1
  },
  {
    id: "Q40b",
    module: 4,
    question: "Which of the following best reflects the concept behind: What are ensemble methods, and why are they often used?",
    options: ["It automates result interpretation only.", "It skips problem formulation phase.", "It aligns project execution with the intention behind: what are ensemble methods, and why are they often used.", "It reduces analytical objectivity."],
    answer: 2
  },
  {
    id: "Q41a",
    module: 5,
    question: "What is a key reason why: What is a hyperparameter in a machine learning model?",
    options: ["It eliminates the need for data validation.", "It avoids the need for business involvement.", "It ensures effective handling of: what is a hyperparameter in a machine learning model.", "It simplifies stakeholder communication only."],
    answer: 2
  },
  {
    id: "Q41b",
    module: 5,
    question: "Which of the following best reflects the concept behind: What is a hyperparameter in a machine learning model?",
    options: ["It automates result interpretation only.", "It reduces analytical objectivity.", "It aligns project execution with the intention behind: what is a hyperparameter in a machine learning model.", "It skips problem formulation phase."],
    answer: 2
  },
  {
    id: "Q42a",
    module: 5,
    question: "What is a key reason why: What is the difference between model parameters and hyperparameters?",
    options: ["It avoids the need for business involvement.", "It ensures effective handling of: what is the difference between model parameters and hyperparameters.", "It eliminates the need for data validation.", "It simplifies stakeholder communication only."],
    answer: 1
  },
  {
    id: "Q42b",
    module: 5,
    question: "Which of the following best reflects the concept behind: What is the difference between model parameters and hyperparameters?",
    options: ["It reduces analytical objectivity.", "It aligns project execution with the intention behind: what is the difference between model parameters and hyperparameters.", "It skips problem formulation phase.", "It automates result interpretation only."],
    answer: 1
  },
  {
    id: "Q43a",
    module: 5,
    question: "What is a key reason why: What is regularization, and how can it help prevent overfitting?",
    options: ["It eliminates the need for data validation.", "It avoids the need for business involvement.", "It ensures effective handling of: what is regularization, and how can it help prevent overfitting.", "It simplifies stakeholder communication only."],
    answer: 2
  },
  {
    id: "Q43b",
    module: 5,
    question: "Which of the following best reflects the concept behind: What is regularization, and how can it help prevent overfitting?",
    options: ["It reduces analytical objectivity.", "It aligns project execution with the intention behind: what is regularization, and how can it help prevent overfitting.", "It skips problem formulation phase.", "It automates result interpretation only."],
    answer: 1
  },
  {
    id: "Q44a",
    module: 5,
    question: "What is a key reason why: Why is it important to separate training and testing data?",
    options: ["It ensures effective handling of: why is it important to separate training and testing data.", "It simplifies stakeholder communication only.", "It eliminates the need for data validation.", "It avoids the need for business involvement."],
    answer: 0
  },
  {
    id: "Q44b",
    module: 5,
    question: "Which of the following best reflects the concept behind: Why is it important to separate training and testing data?",
    options: ["It automates result interpretation only.", "It aligns project execution with the intention behind: why is it important to separate training and testing data.", "It reduces analytical objectivity.", "It skips problem formulation phase."],
    answer: 1
  },
  {
    id: "Q45a",
    module: 5,
    question: "What is a key reason why: What does precision measure, and why might it matter more than accuracy in some cases?",
    options: ["It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It ensures effective handling of: what does precision measure, and why might it matter more than accuracy in some cases.", "It avoids the need for business involvement."],
    answer: 2
  },
  {
    id: "Q45b",
    module: 5,
    question: "Which of the following best reflects the concept behind: What does precision measure, and why might it matter more than accuracy in some cases?",
    options: ["It skips problem formulation phase.", "It aligns project execution with the intention behind: what does precision measure, and why might it matter more than accuracy in some cases.", "It automates result interpretation only.", "It reduces analytical objectivity."],
    answer: 1
  },
  {
    id: "Q46a",
    module: 5,
    question: "What is a key reason why: What is the F1 score, and why is it useful?",
    options: ["It eliminates the need for data validation.", "It avoids the need for business involvement.", "It ensures effective handling of: what is the f1 score, and why is it useful.", "It simplifies stakeholder communication only."],
    answer: 2
  },
  {
    id: "Q46b",
    module: 5,
    question: "Which of the following best reflects the concept behind: What is the F1 score, and why is it useful?",
    options: ["It automates result interpretation only.", "It reduces analytical objectivity.", "It aligns project execution with the intention behind: what is the f1 score, and why is it useful.", "It skips problem formulation phase."],
    answer: 2
  },
  {
    id: "Q47a",
    module: 5,
    question: "What is a key reason why: Why is RMSE often preferred over MSE when reporting model performance?",
    options: ["It ensures effective handling of: why is rmse often preferred over mse when reporting model performance.", "It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It eliminates the need for data validation."],
    answer: 0
  },
  {
    id: "Q47b",
    module: 5,
    question: "Which of the following best reflects the concept behind: Why is RMSE often preferred over MSE when reporting model performance?",
    options: ["It reduces analytical objectivity.", "It skips problem formulation phase.", "It automates result interpretation only.", "It aligns project execution with the intention behind: why is rmse often preferred over mse when reporting model performance."],
    answer: 3
  },
  {
    id: "Q48a",
    module: 5,
    question: "What is a key reason why: Why might high accuracy be misleading in imbalanced datasets?",
    options: ["It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It ensures effective handling of: why might high accuracy be misleading in imbalanced datasets.", "It eliminates the need for data validation."],
    answer: 2
  },
  {
    id: "Q48b",
    module: 5,
    question: "Which of the following best reflects the concept behind: Why might high accuracy be misleading in imbalanced datasets?",
    options: ["It automates result interpretation only.", "It reduces analytical objectivity.", "It aligns project execution with the intention behind: why might high accuracy be misleading in imbalanced datasets.", "It skips problem formulation phase."],
    answer: 2
  },
  {
    id: "Q49a",
    module: 5,
    question: "What is a key reason why: We are developing a churn detection tool for a mobile operator. What type of machine learning problem are we facing?",
    options: ["It ensures effective handling of: we are developing a churn detection tool for a mobile operator. what type of machine learning problem are we facing.", "It avoids the need for business involvement.", "It eliminates the need for data validation.", "It simplifies stakeholder communication only."],
    answer: 0
  },
  {
    id: "Q49b",
    module: 5,
    question: "Which of the following best reflects the concept behind: We are developing a churn detection tool for a mobile operator. What type of machine learning problem are we facing?",
    options: ["It reduces analytical objectivity.", "It aligns project execution with the intention behind: we are developing a churn detection tool for a mobile operator. what type of machine learning problem are we facing.", "It automates result interpretation only.", "It skips problem formulation phase."],
    answer: 1
  },
  {
    id: "Q50a",
    module: 5,
    question: "What is a key reason why: What is cross-validation, and why is it important?",
    options: ["It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It ensures effective handling of: what is cross-validation, and why is it important.", "It eliminates the need for data validation."],
    answer: 2
  },
  {
    id: "Q50b",
    module: 5,
    question: "Which of the following best reflects the concept behind: What is cross-validation, and why is it important?",
    options: ["It reduces analytical objectivity.", "It skips problem formulation phase.", "It automates result interpretation only.", "It aligns project execution with the intention behind: what is cross-validation, and why is it important."],
    answer: 3
  },
  {
    id: "Q51a",
    module: 6,
    question: "What is a key reason why: What is the bias-variance tradeoff in machine learning?",
    options: ["It simplifies stakeholder communication only.", "It ensures effective handling of: what is the bias-variance tradeoff in machine learning.", "It avoids the need for business involvement.", "It eliminates the need for data validation."],
    answer: 1
  },
  {
    id: "Q51b",
    module: 6,
    question: "Which of the following best reflects the concept behind: What is the bias-variance tradeoff in machine learning?",
    options: ["It aligns project execution with the intention behind: what is the bias-variance tradeoff in machine learning.", "It skips problem formulation phase.", "It automates result interpretation only.", "It reduces analytical objectivity."],
    answer: 0
  },
  {
    id: "Q52a",
    module: 6,
    question: "What is a key reason why: How does training time typically compare between k-Nearest Neighbors and decision trees?",
    options: ["It ensures effective handling of: how does training time typically compare between k-nearest neighbors and decision trees.", "It eliminates the need for data validation.", "It avoids the need for business involvement.", "It simplifies stakeholder communication only."],
    answer: 0
  },
  {
    id: "Q52b",
    module: 6,
    question: "Which of the following best reflects the concept behind: How does training time typically compare between k-Nearest Neighbors and decision trees?",
    options: ["It reduces analytical objectivity.", "It skips problem formulation phase.", "It aligns project execution with the intention behind: how does training time typically compare between k-nearest neighbors and decision trees.", "It automates result interpretation only."],
    answer: 2
  },
  {
    id: "Q53a",
    module: 6,
    question: "What is a key reason why: How would you expect a linear model and a decision tree to behave differently when faced with non-linear data?",
    options: ["It simplifies stakeholder communication only.", "It ensures effective handling of: how would you expect a linear model and a decision tree to behave differently when faced with non-linear data.", "It eliminates the need for data validation.", "It avoids the need for business involvement."],
    answer: 1
  },
  {
    id: "Q53b",
    module: 6,
    question: "Which of the following best reflects the concept behind: How would you expect a linear model and a decision tree to behave differently when faced with non-linear data?",
    options: ["It skips problem formulation phase.", "It reduces analytical objectivity.", "It aligns project execution with the intention behind: how would you expect a linear model and a decision tree to behave differently when faced with non-linear data.", "It automates result interpretation only."],
    answer: 2
  },
  {
    id: "Q54a",
    module: 6,
    question: "What is a key reason why: What is the definition of AI?",
    options: ["It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It ensures effective handling of: what is the definition of ai."],
    answer: 3
  },
  {
    id: "Q54b",
    module: 6,
    question: "Which of the following best reflects the concept behind: What is the definition of AI?",
    options: ["It skips problem formulation phase.", "It aligns project execution with the intention behind: what is the definition of ai.", "It reduces analytical objectivity.", "It automates result interpretation only."],
    answer: 1
  },
  {
    id: "Q55a",
    module: 6,
    question: "What is a key reason why: What types of tasks can LLMs typically perform?",
    options: ["It eliminates the need for data validation.", "It ensures effective handling of: what types of tasks can llms typically perform.", "It avoids the need for business involvement.", "It simplifies stakeholder communication only."],
    answer: 1
  },
  {
    id: "Q55b",
    module: 6,
    question: "Which of the following best reflects the concept behind: What types of tasks can LLMs typically perform?",
    options: ["It reduces analytical objectivity.", "It skips problem formulation phase.", "It aligns project execution with the intention behind: what types of tasks can llms typically perform.", "It automates result interpretation only."],
    answer: 2
  },
  {
    id: "Q56a",
    module: 6,
    question: "What is a key reason why: What does the term “agentic AI” refer to?",
    options: ["It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It ensures effective handling of: what does the term “agentic ai” refer to.", "It avoids the need for business involvement."],
    answer: 2
  },
  {
    id: "Q56b",
    module: 6,
    question: "Which of the following best reflects the concept behind: What does the term “agentic AI” refer to?",
    options: ["It aligns project execution with the intention behind: what does the term “agentic ai” refer to.", "It reduces analytical objectivity.", "It skips problem formulation phase.", "It automates result interpretation only."],
    answer: 0
  },
  {
    id: "Q57a",
    module: 6,
    question: "What is a key reason why: What is the difference between open source and open weight LLMs?",
    options: ["It avoids the need for business involvement.", "It ensures effective handling of: what is the difference between open source and open weight llms.", "It simplifies stakeholder communication only.", "It eliminates the need for data validation."],
    answer: 1
  },
  {
    id: "Q57b",
    module: 6,
    question: "Which of the following best reflects the concept behind: What is the difference between open source and open weight LLMs?",
    options: ["It automates result interpretation only.", "It aligns project execution with the intention behind: what is the difference between open source and open weight llms.", "It reduces analytical objectivity.", "It skips problem formulation phase."],
    answer: 1
  },
  {
    id: "Q58a",
    module: 6,
    question: "What is a key reason why: Why do hallucinations exist in LLMs?",
    options: ["It eliminates the need for data validation.", "It simplifies stakeholder communication only.", "It avoids the need for business involvement.", "It ensures effective handling of: why do hallucinations exist in llms."],
    answer: 3
  },
  {
    id: "Q58b",
    module: 6,
    question: "Which of the following best reflects the concept behind: Why do hallucinations exist in LLMs?",
    options: ["It skips problem formulation phase.", "It reduces analytical objectivity.", "It automates result interpretation only.", "It aligns project execution with the intention behind: why do hallucinations exist in llms."],
    answer: 3
  },
  {
    id: "Q59a",
    module: 6,
    question: "What is a key reason why: Why is RAG used with LLMs?",
    options: ["It simplifies stakeholder communication only.", "It ensures effective handling of: why is rag used with llms.", "It eliminates the need for data validation.", "It avoids the need for business involvement."],
    answer: 1
  },
  {
    id: "Q59b",
    module: 6,
    question: "Which of the following best reflects the concept behind: Why is RAG used with LLMs?",
    options: ["It automates result interpretation only.", "It reduces analytical objectivity.", "It aligns project execution with the intention behind: why is rag used with llms.", "It skips problem formulation phase."],
    answer: 2
  },
];
export default questions;
