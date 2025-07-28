const Task = require("../models/Task");
const User = require("../models/User");
const excelJS = require("exceljs");

// Exports all tasks as an excel file
// Route GET/api/reports/exports/tasks
// access private(Admin)
const exportTasksReport = async (req, res) => {
  try {
    const tasks = await Task.find().populate("assignedTo", "name email");

    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet("Tasks Report");

    worksheet.columns = [
      { header: "Task ID", key: "_id", width: 25 },
      { header: "Title", key: "title", width: 30 },
      { header: "Description", key: "description", width: 50 },
      { header: "Priority", key: "priority", width: 15 },
      { header: "Status", key: "status", width: 20 },
      { header: "Due Date", key: "dueDate", width: 20 },
      { header: "Assigned To", key: "assignedTo", width: 30 },
    ];

    tasks.forEach((task) => {
      const assignedTo = Array.isArray(task.assignedTo)
        ? task.assignedTo
            .map((user) => `${user.name} (${user.email})`)
            .join(", ")
        : task.assignedTo
        ? `${task.assignedTo.name} (${task.assignedTo.email})`
        : "Unassigned";

      worksheet.addRow({
        _id: task._id,
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        dueDate: task.dueDate.toISOString().split("T")[0],
        assignedTo: assignedTo || "Unassigned",
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename='tasks_report.xlsx'"
    );

    return workbook.xlsx.write(res).then(() => {
      res.end();
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error exporting tasks", error: error.message }); // fixed typo
  }
};

// Export all users with task summary as an Excel file
// route   GET /api/reports/export/users
// access  Private (Admin)

const exportUsersReport = async (req, res) => {
  try {
    const users = await User.find().select("name email _id").lean();
    const userTasks = await Task.find().populate(
      "assignedTo",
      "name email _id"
    );

    const userTaskMap = {};

    // Initialize task counters for each user
    users.forEach((user) => {
      userTaskMap[user._id.toString()] = {
        name: user.name,
        email: user.email, // fixed from email_id
        taskCount: 0,
        pendingTasks: 0,
        inProgressTasks: 0,
        completedTasks: 0,
      };
    });

    // Count task statuses per user
    userTasks.forEach((task) => {
      if (Array.isArray(task.assignedTo)) {
        task.assignedTo.forEach((assignedUser) => {
          const userId = assignedUser._id.toString();
          if (userTaskMap[userId]) {
            userTaskMap[userId].taskCount += 1;

            if (task.status === "Pending") {
              userTaskMap[userId].pendingTasks += 1;
            } else if (task.status === "In Progress") {
              userTaskMap[userId].inProgressTasks += 1;
            } else if (task.status === "Completed") {
              userTaskMap[userId].completedTasks += 1;
            }
          }
        });
      }
    });

    // Create Excel Workbook and Worksheet
    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet("User Task Report");

    worksheet.columns = [
      { header: "User Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 40 },
      { header: "Total Assigned Tasks", key: "taskCount", width: 20 },
      { header: "Pending Tasks", key: "pendingTasks", width: 20 },
      { header: "In Progress Tasks", key: "inProgressTasks", width: 20 },
      { header: "Completed Tasks", key: "completedTasks", width: 20 },
    ];

    Object.values(userTaskMap).forEach((user) => {
      worksheet.addRow(user);
    });

    // Set response headers
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="users_report.xlsx"'
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Excel export error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  exportTasksReport,
  exportUsersReport,
};
