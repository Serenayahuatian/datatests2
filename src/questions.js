const questions = [
  {
    id: 'Module2_Q1a',
    question: 'When is a sample considered biased for the population under study?',
    options: [
      'When certain subgroups are over- or under-represented compared to the target population.',
      'When all possible members are included.',
      'When the sample size exceeds the population size.',
      'When random sampling methods are strictly followed.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q1b',
    question: 'Which scenario indicates sample bias?',
    options: [
      'Selecting survey participants only from one city when generalizing to the whole country.',
      'Including every possible respondent from the population.',
      'Sampling using a true random generator.',
      'Ensuring equal chance for all individuals.'
    ],
    answer: 0
  },

  // Q2: What is the difference between structured and unstructured data?
  {
    id: 'Module2_Q2a',
    question: 'Structured data differs from unstructured data because it:',
    options: [
      'Has a predefined schema (rows and columns) and is easily queryable.',
      'Cannot be stored in databases.',
      'Is always text-only.',
      'Never contains numeric values.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q2b',
    question: 'Which of the following is an example of unstructured data?',
    options: [
      'Free-form text from customer reviews.',
      'Relational database of sales transactions.',
      'CSV file of monthly revenues.',
      'SQL table of employee records.'
    ],
    answer: 0
  },

  // Q3: What is the first thing you should check when receiving a new dataset?
  {
    id: 'Module2_Q3a',
    question: 'When first receiving a new dataset, an analyst should check:',
    options: [
      'Data types, missing values, and overall completeness.',
      'The choice of machine learning algorithm.',
      'Only the column names.',
      'The color scheme of plots.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q3b',
    question: 'The initial step in data understanding typically involves:',
    options: [
      'Reviewing metadata and basic statistics (counts, types, nulls).',
      'Model training on raw data.',
      'Writing final report sections.',
      'Deploying dashboards immediately.'
    ],
    answer: 0
  },

  // Q4: What is typically the first activity when starting to explore a new dataset?
  {
    id: 'Module2_Q4a',
    question: 'The first activity in exploratory data analysis often is:',
    options: [
      'Computing summary statistics and visualizing distributions.',
      'Performing hyperparameter tuning.',
      'Building production pipelines.',
      'Writing business requirements.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q4b',
    question: 'When you begin data exploration, you usually:',
    options: [
      'Plot histograms and calculate means/medians for each variable.',
      'Jump directly into clustering.',
      'Skip data cleaning entirely.',
      'Merge data with unrelated sources.'
    ],
    answer: 0
  },

  // Q5: What does data granularity mean in the context of a dataset?
  {
    id: 'Module2_Q5a',
    question: 'Data granularity refers to:',
    options: [
      'The level of detail or summarization of records (transactional vs. aggregated).',
      'The color used in charts.',
      'The number of features only.',
      'The speed of data loading.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q5b',
    question: 'High granularity in a dataset means:',
    options: [
      'Records are very detailed and fine-grained (e.g., per transaction).',
      'Only annual summaries are provided.',
      'All data is aggregated by year.',
      'Data is encrypted.'
    ],
    answer: 0
  },

  // Q6: What does high cardinality mean for a variable?
  {
    id: 'Module2_Q6a',
    question: 'A categorical variable has high cardinality when it:',
    options: [
      'Contains many distinct values relative to the sample size.',
      'Has only two possible values.',
      'Is always numeric.',
      'Cannot be encoded.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q6b',
    question: 'Which variable exhibits high cardinality?',
    options: [
      'User IDs for millions of unique users.',
      'A Yes/No field.',
      'A boolean flag.',
      'A binary target.'
    ],
    answer: 0
  },

  // Q7: How identify relationships between two categorical variables?
  {
    id: 'Module2_Q7a',
    question: 'Which method helps identify relationships between two categorical variables?',
    options: [
      'Contingency tables (crosstabs) and chi-squared tests.',
      'Histograms of numeric values.',
      'Scatter plots of continuous features.',
      'Time series decomposition.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q7b',
    question: 'A practical way to explore associations of two categories is to use:',
    options: [
      'Pivot tables showing joint frequency counts.',
      'Line charts of averages.',
      'Boxplots of distributions.',
      'K-means clustering.'
    ],
    answer: 0
  },

  // Q8: How explore distribution of a continuous variable?
  {
    id: 'Module2_Q8a',
    question: 'To explore the distribution of a continuous variable, you would use:',
    options: [
      'Histograms and boxplots.',
      'Bar charts of counts.',
      'Word clouds.',
      'Network graphs.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q8b',
    question: 'Which plot helps reveal skew and outliers in a numeric variable?',
    options: [
      'Boxplot.',
      'Pie chart.',
      'Heatmap.',
      'Line plot.'
    ],
    answer: 0
  },

  // Q9: Risks if metadata or data dictionary is missing
  {
    id: 'Module2_Q9a',
    question: 'Absence of metadata or a data dictionary can lead to:',
    options: [
      'Misinterpretation of fields and incorrect analysis.',
      'Faster data loading.',
      'Complete automation of analysis.',
      'Automatic imputation.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q9b',
    question: 'Lacking a clear data dictionary often results in:',
    options: [
      'Confusion over variable meanings and units.',
      'Guaranteed high data quality.',
      'No need for exploratory analysis.',
      'Better feature engineering.'
    ],
    answer: 0
  },

  // Q10: Clues for transactional vs. aggregated data
  {
    id: 'Module2_Q10a',
    question: 'Which clue suggests data is transactional rather than aggregated?',
    options: [
      'Each row has a timestamp and unique transaction ID.',
      'One row per month summarizing totals.',
      'No time information at all.',
      'Only average values present.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q10b',
    question: 'Aggregated data typically:',
    options: [
      'Summarizes multiple events (e.g., daily totals per region).',
      'Records each individual event.',
      'Always contains raw logs.',
      'Is never used for analysis.'
    ],
    answer: 0
  },

  // Q11: Check if dataset covers full time period
  {
    id: 'Module2_Q11a',
    question: 'To verify if the dataset covers the full intended time period, you would:',
    options: [
      'Inspect min/max dates and look for gaps.',
      'Check only the column names.',
      'Run clustering on time stamps.',
      'Use a heatmap of categories.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q11b',
    question: 'A quick method to confirm date coverage is to:',
    options: [
      'Compute the range and count of records per period.',
      'Plot a bar chart of categories.',
      'Perform PCA.',
      'Impute missing dates randomly.'
    ],
    answer: 0
  },

  // Q12: Verify categorical variables coded consistently
  {
    id: 'Module2_Q12a',
    question: 'To verify consistent coding of categorical variables, you might:',
    options: [
      'List unique values and standardize case/spelling.',
      'Ignore duplicates.',
      'Convert them all to numeric without checks.',
      'Use the variable as-is.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q12b',
    question: 'Inconsistent categories can be detected by:',
    options: [
      'Checking value counts and grouping similar labels.',
      'Skipping data cleaning.',
      'Using only default encoders.',
      'Relying on modeling to fix codes.'
    ],
    answer: 0
  },

  // Q13: Explore if two variables have a relationship
  {
    id: 'Module2_Q13a',
    question: 'Which analysis helps explore a relationship between two numeric variables?',
    options: [
      'Scatter plot and correlation coefficient.',
      'Contingency table.',
      'Word cloud.',
      'Bar chart of counts.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q13b',
    question: 'A high correlation coefficient indicates:',
    options: [
      'A strong linear association between two numeric variables.',
      'No relationship at all.',
      'That variables are categorical.',
      'Missing values everywhere.'
    ],
    answer: 0
  },

  // Q14: Common sources of bias in a dataset
  {
    id: 'Module2_Q14a',
    question: 'Which is a common source of bias in a dataset?',
    options: [
      'Non-random sampling that overrepresents certain groups.',
      'Perfect randomness.',
      'Using only numeric features.',
      'Complete absence of outliers.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q14b',
    question: 'Data bias can arise from:',
    options: [
      'Historical prejudices embedded in records.',
      'Uniform representation of all groups.',
      'Direct measurement of variables.',
      'Exhaustive data collection.'
    ],
    answer: 0
  },

  // Q15: Check if numeric variables outside expected ranges
  {
    id: 'Module2_Q15a',
    question: 'To find numeric values outside expected ranges, you would:',
    options: [
      'Identify min/max and flag out-of-bound entries.',
      'Skip range checks.',
      'Use clustering only.',
      'Automatically accept all values.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q15b',
    question: 'Unexpected numeric outliers might indicate:',
    options: [
      'Data entry errors or measurement anomalies.',
      'Perfectly clean data.',
      'Consistent business logic.',
      'Proper data documentation.'
    ],
    answer: 0
  },

  // Q16: What does imputation mean in data preparation?
  {
    id: 'Module2_Q16a',
    question: 'Imputation in data preparation refers to:',
    options: [
      'Replacing missing values with estimated ones.',
      'Removing entire columns.',
      'Encrypting data.',
      'Visualizing data.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q16b',
    question: 'A common imputation method is:',
    options: [
      'Filling missing entries with mean or median.',
      'Deleting the dataset.',
      'Ignoring missing values completely.',
      'Treating missing as zero always.'
    ],
    answer: 0
  },

  // Q17: Handle extreme outliers that seem valid
  {
    id: 'Module2_Q17a',
    question: 'How would you handle extreme outliers that appear valid?',
    options: [
      'Consider transformation or robust models but keep them in data.',
      'Always delete them.',
      'Replace with zeros.',
      'Ignore modelling altogether.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q17b',
    question: 'Valid but extreme outliers can be managed by:',
    options: [
      'Using log or winsorization to reduce skew.',
      'Hard-coding values to average.',
      'Dropping without analysis.',
      'Encoding as categorical.'
    ],
    answer: 0
  },

  // Q18: Risks of deleting all rows with missing values
  {
    id: 'Module2_Q18a',
    question: 'What is a key risk of simply deleting all rows with missing values?',
    options: [
      'Significant data loss and potential bias.',
      'Improved data integrity always.',
      'Faster model training only.',
      'Guaranteed no error.'
    ],
    answer: 0
  },
  {
    id: 'Module2_Q18b',
    question: 'Dropping missing rows indiscriminately may:',
    options: [
      'Skew the sample and discard useful information.',
      'Enhance dataset representativeness.',
      'Prevent any bias.',
      'Always improve accuracy.'
    ],
    answer: 0
  },

// Module 3 – Data Understanding & Cleaning Part 2 (7 points × 2 = 14 questions)

  // Q1: What is the purpose of feature scaling?
  {
    id: 'Module3_Q1a',
    question: 'What is the main purpose of feature scaling?',
    options: [
      'To ensure all features contribute equally to distance-based algorithms.',
      'To increase model complexity.',
      'To encrypt data.',
      'To remove categorical variables.'
    ],
    answer: 0
  },
  {
    id: 'Module3_Q1b',
    question: 'Feature scaling is critical for which type of algorithms?',
    options: [
      'Distance-based methods like kNN and SVM.',
      'Tree-based methods only.',
      'Text mining exclusively.',
      'Any algorithm without exception.'
    ],
    answer: 0
  },

  // Q2: When prefer standardization over normalization?
  {
    id: 'Module3_Q2a',
    question: 'When would you prefer standardization (z-score) over normalization (min-max)?',
    options: [
      'When data contains outliers and a Gaussian assumption is acceptable.',
      'When you need values strictly between 0 and 1.',
      'When working with categorical data.',
      'When using only tree models.'
    ],
    answer: 0
  },
  {
    id: 'Module3_Q2b',
    question: 'A key advantage of standardization is:',
    options: [
      'It centers data at zero and is less sensitive to outliers.',
      'It guarantees values in [0,1].',
      'It removes the need for scaling.',
      'It always improves interpretability.'
    ],
    answer: 0
  },

  // Q3: Create a derived feature
  {
    id: 'Module3_Q3a',
    question: 'Creating a derived feature involves:',
    options: [
      'Transforming or combining existing variables to capture new patterns.',
      'Deleting original features always.',
      'Encoding as text only.',
      'Running clustering.'
    ],
    answer: 0
  },
  {
    id: 'Module3_Q3b',
    question: 'An example of a derived feature is:',
    options: [
      'Calculating age from a birthdate field.',
      'Using raw IDs directly.',
      'Dropping all numeric features.',
      'One-hot encoding categorical codes.'
    ],
    answer: 0
  },

  // Q4: One-hot encoding impact on complexity
  {
    id: 'Module3_Q4a',
    question: 'How can one-hot encoding impact model complexity?',
    options: [
      'It can greatly increase dimensionality if many categories exist.',
      'It reduces feature count always.',
      'It removes all categorical information.',
      'It standardizes numeric scale.'
    ],
    answer: 0
  },
  {
    id: 'Module3_Q4b',
    question: 'Large cardinality categories after one-hot encoding may:',
    options: [
      'Lead to high-dimensional sparse matrices and slower training.',
      'Improve model speed always.',
      'Remove the need for feature selection.',
      'Guarantee higher accuracy.'
    ],
    answer: 0
  },

  // Q5: What is binning and when useful?
  {
    id: 'Module3_Q5a',
    question: 'What does binning involve and when is it useful?',
    options: [
      'Grouping continuous variables into discrete intervals to reduce noise.',
      'Encoding text features.',
      'Dropping numeric variables.',
      'Clustering records automatically.'
    ],
    answer: 0
  },
  {
    id: 'Module3_Q5b',
    question: 'Binning is particularly helpful for:',
    options: [
      'Handling skewed distributions or simplifying interpretation.',
      'Creating continuous features.',
      'Increasing model variance.',
      'Removing outliers fully.'
    ],
    answer: 0
  },

  // Q6: Why remove highly correlated features?
  {
    id: 'Module3_Q6a',
    question: 'Why might you want to remove highly correlated features?',
    options: [
      'To reduce multicollinearity and simplify models.',
      'To increase dataset size.',
      'To avoid normalization.',
      'To create new features.'
    ],
    answer: 0
  },
  {
    id: 'Module3_Q6b',
    question: 'High correlation among features can:',
    options: [
      'Cause unstable coefficient estimates in linear models.',
      'Always improve generalization.',
      'Eliminate the need for feature scaling.',
      'Boost tree-based algorithms automatically.'
    ],
    answer: 0
  },

  // Q7: How handle text data before ML?
  {
    id: 'Module3_Q7a',
    question: 'How would you handle raw text data before feeding it into a machine learning model?',
    options: [
      'Perform tokenization, stop-word removal, and vectorization (e.g., TF-IDF).',
      'Convert it directly to numeric IDs.',
      'Ignore text features entirely.',
      'Use only raw strings.'
    ],
    answer: 0
  },
  {
    id: 'Module3_Q7b',
    question: 'A typical pipeline for text data includes:',
    options: [
      'Cleaning, tokenizing, and then encoding into numeric vectors.',
      'Skipping preprocessing steps.',
      'Treating text as continuous variables.',
      'Applying one-hot on raw text.'
    ],
    answer: 0
  },

// Module 4 – Data Visualisation (4 points × 2 = 8 questions)

  // Q1: Difference between exploratory and explanatory visualizations
  {
    id: 'Module4_Q1a',
    question: 'What distinguishes exploratory from explanatory visualizations?',
    options: [
      'Exploratory helps analysts find patterns; explanatory communicates a clear story to an audience.',
      'Exploratory is only static; explanatory is interactive.',
      'Exploratory uses only bar charts; explanatory uses line charts.',
      'They are identical in purpose.'
    ],
    answer: 0
  },
  {
    id: 'Module4_Q1b',
    question: 'An explanatory visualization is designed to:',
    options: [
      'Highlight key insights and guide interpretation for stakeholders.',
      'Show every data detail without commentary.',
      'Explore unknown data without hypothesis.',
      'Ignore audience context.'
    ],
    answer: 0
  },

  // Q2: Why prefer boxplots over histograms for outliers?
  {
    id: 'Module4_Q2a',
    question: 'Why might boxplots be preferred over histograms when analyzing outliers?',
    options: [
      'Boxplots explicitly display median, quartiles, and outliers in a compact form.',
      'Boxplots cannot show distributions.',
      'Histograms highlight individual data points.',
      'Boxplots always aggregate data monthly.'
    ],
    answer: 0
  },
  {
    id: 'Module4_Q2b',
    question: 'Boxplots are useful because they:',
    options: [
      'Visualize spread and pinpoint extreme values directly.',
      'Require no statistical understanding.',
      'Hide outliers automatically.',
      'Are only for categorical data.'
    ],
    answer: 0
  },

  // Q3: What is a heatmap useful for?
  {
    id: 'Module4_Q3a',
    question: 'A heatmap is useful for:',
    options: [
      'Showing correlation matrices or intensity patterns across two dimensions.',
      'Plotting time series trends only.',
      'Visualizing text data.',
      'Mapping categorical counts in pie charts.'
    ],
    answer: 0
  },
  {
    id: 'Module4_Q3b',
    question: 'You would choose a heatmap to:',
    options: [
      'Highlight cell-wise magnitudes (e.g., feature correlations) via color gradients.',
      'Display hierarchical data only.',
      'Plot sequential data exclusively.',
      'Replace scatter plots always.'
    ],
    answer: 0
  },

  // Q4: How does Tableau aggregate continuous variables by default? What function?
  {
    id: 'Module4_Q4a',
    question: 'By default, Tableau aggregates continuous measures using which function?',
    options: [
      'SUM',
      'MAXIMUM',
      'MEDIAN',
      'STANDARD DEVIATION'
    ],
    answer: 0
  },
  {
    id: 'Module4_Q4b',
    question: 'If you drag a continuous field into rows in Tableau without change, it will:',
    options: [
      'Sum the values by default.',
      'Count distinct values.',
      'Display raw detail rows.',
      'Apply average automatically.'
    ],
    answer: 0
  },

// Module 5 – Machine Learning (15 points × 2 = 30 questions)

  // Q1: Goal of clustering algorithms
  {
    id: 'Module5_Q1a',
    question: 'What is the primary goal of clustering algorithms?',
    options: [
      'To group similar data points together without pre-labeled targets.',
      'To predict a numeric output.',
      'To build decision rules for classification.',
      'To perform feature scaling automatically.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q1b',
    question: 'Clustering is best described as:',
    options: [
      'Unsupervised partitioning based on similarity metrics.',
      'Supervised classification with labels.',
      'Random sampling technique.',
      'Hyperparameter optimization strategy.'
    ],
    answer: 0
  },

  // Q2: Ensemble methods and why used
  {
    id: 'Module5_Q2a',
    question: 'What are ensemble methods in machine learning?',
    options: [
      'Techniques that combine multiple models to improve accuracy and robustness.',
      'Methods that use a single decision rule.',
      'Approaches that avoid model averaging.',
      'Techniques to prune datasets.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q2b',
    question: 'Why are ensemble methods often preferred?',
    options: [
      'They reduce overfitting by averaging diverse model predictions.',
      'They always use deep neural networks.',
      'They simplify hyperparameter tuning.',
      'They require no training data.'
    ],
    answer: 0
  },

  // Q3: What is a hyperparameter?
  {
    id: 'Module5_Q3a',
    question: 'In machine learning, a hyperparameter is:',
    options: [
      'A setting external to the model that must be tuned (e.g., tree depth).',
      'A weight learned during training.',
      'The final evaluation metric.',
      'A data transformation step.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q3b',
    question: 'Which of these is a hyperparameter?',
    options: [
      'Number of trees in a random forest.',
      'Coefficient of a linear regression.',
      'Predicted output values.',
      'Loss function values.'
    ],
    answer: 0
  },

  // Q4: Difference between model parameters and hyperparameters
  {
    id: 'Module5_Q4a',
    question: 'What is the difference between model parameters and hyperparameters?',
    options: [
      'Parameters are learned during training; hyperparameters are set before training.',
      'Hyperparameters are learned; parameters are fixed.',
      'Both are determined after deployment.',
      'There is no difference.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q4b',
    question: 'Which is true about model parameters?',
    options: [
      'They are adjusted to fit the data during training.',
      'They are chosen by the data scientist arbitrarily.',
      'They control the learning rate externally.',
      'They are always the same for every algorithm.'
    ],
    answer: 0
  },

  // Q5: What is regularization and how prevent overfitting?
  {
    id: 'Module5_Q5a',
    question: 'Regularization in machine learning helps prevent overfitting by:',
    options: [
      'Adding a penalty term to the loss function for large weights.',
      'Increasing model complexity indefinitely.',
      'Removing cross-validation steps.',
      'Using raw data only.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q5b',
    question: 'An example of regularization technique is:',
    options: [
      'L2 (Ridge) regression.',
      'Dropping validation data.',
      'Ignoring bias.',
      'Boosting tree ensembles.'
    ],
    answer: 0
  },

  // Q6: Why separate training and testing data?
  {
    id: 'Module5_Q6a',
    question: 'Why is it important to separate training and testing data?',
    options: [
      'To obtain an unbiased estimate of model generalization.',
      'To speed up model training.',
      'To ensure maximum accuracy on training set.',
      'To avoid data cleaning.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q6b',
    question: 'Using the test set for tuning hyperparameters can:',
    options: [
      'Lead to overfitting on the test data.',
      'Improve generalization always.',
      'Eliminate the need for cross-validation.',
      'Ensure perfect performance.'
    ],
    answer: 0
  },

  // Q7: What does precision measure?
  {
    id: 'Module5_Q7a',
    question: 'In classification, precision measures:',
    options: [
      'The proportion of true positives among all predicted positives.',
      'The total number of correct predictions.',
      'The average distance between predictions.',
      'The variance of errors.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q7b',
    question: 'Precision is particularly important when:',
    options: [
      'False positives are costly (e.g., spam filtering).',
      'All errors are equally acceptable.',
      'We only care about recall.',
      'Using regression models.'
    ],
    answer: 0
  },

  // Q8: What is the F1 score and why useful?
  {
    id: 'Module5_Q8a',
    question: 'The F1 score is useful because it:',
    options: [
      'Balances precision and recall into a single metric.',
      'Measures only accuracy.',
      'Ignores false negatives.',
      'Is always higher than accuracy.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q8b',
    question: 'F1 score is the harmonic mean of:',
    options: [
      'Precision and recall.',
      'Accuracy and specificity.',
      'ROC and AUC.',
      'Mean and median.'
    ],
    answer: 0
  },

  // Q9: Why is RMSE preferred over MSE?
  {
    id: 'Module5_Q9a',
    question: 'Why might RMSE be preferred over MSE when reporting model performance?',
    options: [
      'Because RMSE is in the same units as the target variable, making interpretation easier.',
      'Because RMSE ignores large errors.',
      'Because MSE is always smaller.',
      'Because RMSE requires no computation.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q9b',
    question: 'MSE penalizes large errors more due to:',
    options: [
      'The squaring of residuals.',
      'Taking square root of residuals.',
      'Summing absolute errors.',
      'Ignoring variance.'
    ],
    answer: 0
  },

  // Q10: Why high accuracy misleading in imbalanced datasets?
  {
    id: 'Module5_Q10a',
    question: 'High accuracy can be misleading in imbalanced datasets because:',
    options: [
      'The model may predict the majority class and achieve high accuracy without real predictive power.',
      'Accuracy always reflects true performance.',
      'Minority classes are always perfectly classified.',
      'It ensures high recall.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q10b',
    question: 'In a dataset with 95% negatives, a trivial classifier predicting all negatives has:',
    options: [
      '95% accuracy but zero recall for the positive class.',
      'Zero accuracy always.',
      'High precision for positives.',
      'Perfect F1 score.'
    ],
    answer: 0
  },

  // Q11: Churn detection tool type of problem?
  {
    id: 'Module5_Q11a',
    question: 'Developing a churn detection tool for a mobile operator is an example of which problem?',
    options: [
      'Binary classification.',
      'Clustering.',
      'Regression.',
      'Anomaly detection.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q11b',
    question: 'Churn prediction typically predicts:',
    options: [
      'Whether a customer will churn (Yes/No).',
      'The exact number of months before churn.',
      'Customer segmentation groups.',
      'Unsupervised patterns.'
    ],
    answer: 0
  },

  // Q12: What is cross-validation and why important?
  {
    id: 'Module5_Q12a',
    question: 'Cross-validation is important because it:',
    options: [
      'Provides a more reliable estimate of model performance across different data splits.',
      'Trains the final model faster.',
      'Removes the need for testing data.',
      'Ensures no hyperparameter tuning.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q12b',
    question: 'In k-fold cross-validation, the data is split into k subsets, and the model is:',
    options: [
      'Trained k times, each time leaving out one fold for validation.',
      'Trained once on the entire dataset.',
      'Never validated.',
      'Always overfit.'
    ],
    answer: 0
  },

  // Q13: What is the bias-variance tradeoff?
  {
    id: 'Module5_Q13a',
    question: 'The bias-variance tradeoff refers to:',
    options: [
      'The balance between underfitting (high bias) and overfitting (high variance).',
      'The trade between precision and recall.',
      'The trade between training time and memory.',
      'The ratio of categorical to numeric features.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q13b',
    question: 'A model with too much complexity usually has:',
    options: [
      'Low bias but high variance.',
      'High bias and low variance.',
      'Perfect generalization always.',
      'No relation to complexity.'
    ],
    answer: 0
  },

  // Q14: Training time k-NN vs decision trees
  {
    id: 'Module5_Q14a',
    question: 'How does training time typically compare between k-Nearest Neighbors and decision trees?',
    options: [
      'k-NN has almost no training time but higher prediction time, while decision trees take time to train but predict quickly.',
      'k-NN always trains faster and predicts faster.',
      'Decision trees never require training.',
      'Both have identical time characteristics.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q14b',
    question: 'After training, k-NN prediction is slow because it:',
    options: [
      'Computes distances to all training points at prediction time.',
      'Uses a pre-built tree structure.',
      'Fetches a single coefficient.',
      'Runs cross-validation again.'
    ],
    answer: 0
  },

  // Q15: Linear model vs decision tree on non-linear data
  {
    id: 'Module5_Q15a',
    question: 'When faced with non-linear data, a linear model will:',
    options: [
      'Underfit and yield poor accuracy due to its linear assumption.',
      'Capture complex interactions perfectly.',
      'Always outperform decision trees.',
      'Seamlessly model any patterns.'
    ],
    answer: 0
  },
  {
    id: 'Module5_Q15b',
    question: 'A decision tree can better handle non-linear relationships because it:',
    options: [
      'Splits the feature space into regions via hierarchical thresholds.',
      'Only fits a single hyperplane.',
      'Assumes a linear combination of features.',
      'Never overfits.'
    ],
    answer: 0
  },

// Module 6 – AI (Guest Lecture) (6 points × 2 = 12 questions)

  // Q1: Definition of AI
  {
    id: 'Module6_Q1a',
    question: 'What is a common definition of Artificial Intelligence (AI)?',
    options: [
      'The capability of machines to perform tasks that normally require human intelligence.',
      'A rule-based programming only.',
      'Purely physical robots without software.',
      'Only machine learning algorithms.'
    ],
    answer: 0
  },
  {
    id: 'Module6_Q1b',
    question: 'AI systems typically encompass:',
    options: [
      'Learning, reasoning, and decision-making functions.',
      'Only database storage.',
      'Only hardware components.',
      'Only network protocols.'
    ],
    answer: 0
  },

  // Q2: What tasks can LLMs typically perform?
  {
    id: 'Module6_Q2a',
    question: 'Large Language Models (LLMs) are typically capable of:',
    options: [
      'Text generation, summarization, translation, and question-answering.',
      'Purely numerical matrix operations.',
      'Physical robot control only.',
      'Operating system management.'
    ],
    answer: 0
  },
  {
    id: 'Module6_Q2b',
    question: 'LLMs can be used for:',
    options: [
      'Creating conversational agents and content drafts.',
      'Only image recognition.',
      'Only clustering algorithms.',
      'Direct hardware programming.'
    ],
    answer: 0
  },

  // Q3: What does “agentic AI” refer to?
  {
    id: 'Module6_Q3a',
    question: 'The term “agentic AI” refers to:',
    options: [
      'AI systems that can plan and act autonomously to achieve goals.',
      'AI that only classifies images.',
      'Rule-based spreadsheets.',
      'Only data storage solutions.'
    ],
    answer: 0
  },
  {
    id: 'Module6_Q3b',
    question: 'Agentic AI agents are characterized by their ability to:',
    options: [
      'Make decisions, gather information, and adapt over time.',
      'Only pre-scripted responses.',
      'Guess without any planning.',
      'Operate without any input.'
    ],
    answer: 0
  },

  // Q4: Difference between open source and open weight LLMs
  {
    id: 'Module6_Q4a',
    question: 'What is the difference between open source and open weight LLMs?',
    options: [
      'Open source means code is public; open weight means model weights are available to run locally.',
      'They are identical terms.',
      'Open source requires paid licenses.',
      'Open weight means no code is provided.'
    ],
    answer: 0
  },
  {
    id: 'Module6_Q4b',
    question: 'An open weight model allows users to:',
    options: [
      'Download and run the pretrained model locally.',
      'Only view API documentation.',
      'Use cloud services exclusively.',
      'Edit source code only.'
    ],
    answer: 0
  },

  // Q5: Why do hallucinations exist in LLMs?
  {
    id: 'Module6_Q5a',
    question: 'Hallucinations in LLMs exist because:',
    options: [
      'Models predict plausible tokens without factual grounding.',
      'They always have perfect knowledge.',
      'They never generate novel text.',
      'They use only rule-based logic.'
    ],
    answer: 0
  },
  {
    id: 'Module6_Q5b',
    question: 'To reduce hallucinations, one can:',
    options: [
      'Use Retrieval-Augmented Generation (RAG) to ground responses in real data.',
      'Disable token sampling.',
      'Only use small models.',
      'Ignore factual verification.'
    ],
    answer: 0
  },

  // Q6: Why is RAG used with LLMs?
  {
    id: 'Module6_Q6a',
    question: 'Why is Retrieval-Augmented Generation (RAG) used with LLMs?',
    options: [
      'To incorporate up-to-date factual documents into responses.',
      'To increase hallucination rates.',
      'To slow down generation speed.',
      'To remove the need for training.'
    ],
    answer: 0
  },
  {
    id: 'Module6_Q6b',
    question: 'RAG improves LLM outputs by:',
    options: [
      'Retrieving relevant content from external sources and feeding it to the model.',
      'Randomly sampling tokens only.',
      'Using no external data.',
      'Replacing the model entirely.'
    ],
    answer: 0
  }

];

export default questions;
