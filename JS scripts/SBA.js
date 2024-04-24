// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
    },
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

let createLearner = {
    learner_id:
        assignment_id
    submission {
        submitted_at:
            score
    }
};

// Skip processing if no matching assignment is found
        if (!assignment) {
            console.log(`No assignment found for ID: ${submission.assignment_id}`);
            continue;
        }

        // Check if the assignment is due
        if (new Date(assignment.due_at) > new Date()) {
            console.log(`Assignment ${assignment.id} not due yet`);
            continue;
        }

        // Find or create a learner record
        let learner = learnersData.find(l => l.id === submission.learner_id);
        if (!learner) {
            learner = { id: submission.learner_id, scores: {}, totalPoints: 0, totalPossible: 0 };
            learnersData.push(learner);
        }

        // Calculate score with potential late penalty
        const isLate = new Date(submission.submitted_at) > new Date(assignment.due_at);
        const score = isLate ? submission.score * 0.9 : submission.score;
        learner.scores[assignment.id] = score / assignment.points_possible;
        learner.totalPoints += score;
        learner.totalPossible += assignment.points_possible;
    }

    // Prepare final results
    return learnersData.map(learner => ({
        id: learner.id,
        avg: learner.totalPoints / learner.totalPossible,
        scores: learner.scores
    }));
}

// Execute the function and log the results
const result = getLearnerData();
console.log("Processed data:", result);