package backendServer;

import java.util.Date;

public class Task{
	
	private String description;
	private Date deadline = null;
	private int id = 0;
	
	public Task(String desc, int daysToDeadline) throws ValidationException {
		this.deadline = createDeadline(daysToDeadline);
		this.description = descriptionValidator(desc);
	}
	
	public Task(String desc, Date deadline, int id) throws ValidationException {
		this.deadline = deadline;
		this.description = desc;
		this.id = id;
	}
	
	public String descriptionValidator(String desc) throws ValidationException {
		if(desc.length() > 7) {
			return desc;
		}
		throw new ValidationException("Need to be at least 8 characters", "Description");
	}
	
	public Date createDeadline(int days) {
        long current = System.currentTimeMillis();
        long futureTime = current+(days * 24L * 60 * 60 * 1000);
        return new Date(futureTime);
	}
	
	@Override
    public String toString() {
        return "Task "+this.id+"\t{\n" +
               "\t\tdescription='" + description + "\',\n" +
               "\t\tdeadline=" + deadline +
               "\n\t}";
    }

	public void setDeadline(Date deadline2) {
		this.deadline = deadline2;
	}

	public void setDescription(String desc) throws ValidationException {
		this.description = descriptionValidator(desc);
	}

	public String getDescription() {
		return description;
	}

	public Date getDeadline() {
		return deadline;
	}
}
