using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Linq;
using System.Data.Linq.Mapping;

namespace CompanyManagementDatalayer
{
    class DataManger
    {
        
        public void getAllProjects()
        {
            CompanyDBDataContext dc = new CompanyDBDataContext();
            Table<Project> projects = dc.Projects;
            var projectQuery = from p in projects select p.ProjectName;
            foreach (string p in projectQuery)
            {
                Console.WriteLine(p);
            }
        }
        public void getAllTechologies()
        {
            CompanyDBDataContext dc = new CompanyDBDataContext();
            Table<TechnologyMaster> technologies = dc.TechnologyMasters;
            var techlist = from t in technologies select t.TechName;
            foreach (string t in techlist)
            {
                Console.WriteLine(t);
            }
        }
        public int GetEmployeeCountForProject(int projectID)
        {
            CompanyDBDataContext dc = new CompanyDBDataContext();
            Table<EmployeeProjectMap> employees = dc.EmployeeProjectMaps;
            var empcountQuery = from emp in employees where emp.ProjectID == projectID select emp.EmployeeID;
            int count = 0;
            foreach (int e in empcountQuery)
            {
                count++;
            }
            return count;
        }
        public List<string> GetEmployeesForProject(int projectID)
        {
            CompanyDBDataContext dc = new CompanyDBDataContext();
            Table<EmployeeProjectMap> employees = dc.EmployeeProjectMaps;
            var empcountQuery = from emp in employees where emp.ProjectID == projectID select emp.Employee.EmployeeName;
            List<string> EmpName = new List<string>();
            foreach (string name in empcountQuery)
            {
                EmpName.Add(name);
            }
            return EmpName;
        }
       
        public List<int> GetAllDelayedProjects()
        {

            CompanyDBDataContext dc = new CompanyDBDataContext();
            Table<Project> projects = dc.Projects;
            

            var projectQuery = from p in projects where p.StatusID == (int)StatusEnum.Delayed select p.ProjectID;
            List<int> projectlist = new List<int>();
            foreach (var project in projectQuery)
            {
                projectlist.Add(project);
            }
            return projectlist;
        }
        public List<int> GetAllProjectsForEmployee(int employeeID)
        {
            CompanyDBDataContext dc = new CompanyDBDataContext();
            Table<EmployeeProjectMap> employeeProjects = dc.EmployeeProjectMaps;
            var employeeProjectQuery = from emp in employeeProjects where emp.EmployeeID == employeeID select emp.ProjectID;
            List<int> projectList = new List<int>();
            foreach (int project in employeeProjectQuery)
            {
                projectList.Add(project);
            }
            return projectList;
        }
        public IQueryable<Task> GetAllTasksForEmployee(int employeeID)
        {
            CompanyDBDataContext dc = new CompanyDBDataContext();
            Table<EmployeeTaskMap> employeeTasks = dc.EmployeeTaskMaps;
            var EmpTaskQuery = from emp in employeeTasks where emp.EmployeeID == employeeID select emp.Task;

            return EmpTaskQuery;
        }
        public IQueryable<Task> GetAllTechnologyTasksForEmployee(int technologyID, int employeeID)
        {
            CompanyDBDataContext dc = new CompanyDBDataContext();
            Table<TechTaskMap> techTaskMaps = dc.TechTaskMaps;
            var techTaskQuery = from task in techTaskMaps
                                where task.TechID == technologyID && task.Task.EmployeeTaskMaps.
            return;
        }
    }
}
