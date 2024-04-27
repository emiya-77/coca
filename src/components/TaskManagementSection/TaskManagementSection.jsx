import TaskManagementContent from "./TaskManagementContent/TaskManagementContent"
import TaskManagementHeader from "./TaskManagementHeader/TaskManagementHeader"

const TaskManagementSection = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-16">
            <div>
                <TaskManagementHeader />
            </div>
            <div>
                <TaskManagementContent />
            </div>
        </div>
    )
}

export default TaskManagementSection