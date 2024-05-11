import TaskManagementContent from "./TaskManagementContent/TaskManagementContent"
import TaskManagementHeader from "./TaskManagementHeader/TaskManagementHeader"

const TaskManagementSection = () => {
    return (
        <div id="team" className="flex flex-col gap-4 justify-center items-center mt-9 mb-16 px-4 md:px-0 md:py-4">
            <div className="px-4">
                <TaskManagementHeader />
            </div>
            <div>
                <TaskManagementContent />
            </div>
        </div>
    )
}

export default TaskManagementSection