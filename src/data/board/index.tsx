import { ICard } from "components/Schedule/Board/Card/types";
import { Status } from "./model";
enum Colors {
  COLOR_1 = "#ABE9CE",
  COLOR_2 = "#D8DCFF",
  COLOR_3 = "#FFDFBA",
  COLOR_4 = "#FEC6B7",
  COLOR_5 = "#D9E6A2",
  COLOR_6 = "#F2BAE1",
  COMPLETED = "#F0F0F0"

}
export const defaultData: ICard[] = [
  { id: 1, title: 'Check email', duration: '0:20h', status: Status.New, color: Colors.COLOR_1 },
  { id: 2, title: 'Compare PPC agencies and make a report for Steven', duration: '3:00h', status: Status.New, color: Colors.COLOR_2 },
  { id: 3, title: 'Meeting with Amanda (PR department)', duration: '0:30h', status: Status.New, color: Colors.COLOR_1 },
  { id: 4, title: "Get Patrick's approval for homepage new design", duration: '0:20h', status: Status.New, color: Colors.COLOR_2 },
  { id: 5, title: 'Check email', duration: '0:20h', status: Status.Scheduled, color: Colors.COLOR_3 },
  {
    id: 6,
    title: 'Write a blogpost "7 best strategies for SEO in 2020"',
    duration: '5:00h',
    status: Status.Scheduled, color: Colors.COLOR_4
  },
  { id: 7, title: 'New Ad copies for Manamaja', duration: '2:00h', status: Status.Scheduled, color: Colors.COLOR_5 },
  { id: 8, title: 'Check email', duration: '0:20h', status: Status.InProgress, color: Colors.COLOR_3 },
  {
    id: 9,
    title: "Record a video comment about last week's analytics report",
    duration: '0:20h',
    status: Status.InProgress,
    color: Colors.COLOR_6
  },
  { id: 10, title: 'Process all resumes for Content Marketer position', duration: '1:00h', status: Status.InProgress, color: Colors.COMPLETED },
  { id: 11, title: 'Check email', duration: '0:20h', status: Status.Completed, color: Colors.COMPLETED },
  { id: 12, title: 'Weekly planning session', duration: '0:45h', status: Status.Completed, color: Colors.COMPLETED },
  {
    id: 13,
    title: 'Create 5+ target audiences in Facebook for Samsung SamsungSamsung',
    duration: '2:30h',
    status: Status.Completed, color: Colors.COMPLETED
  },
  { id: 14, title: 'Check FB Banner Design and give feedback', duration: '0:20h', status: Status.Completed, color: Colors.COMPLETED },
  { id: 15, title: 'Check email', duration: '0:20h', status: Status.Completed, color: Colors.COMPLETED },
]