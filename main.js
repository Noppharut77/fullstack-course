/* + ได้เฉพาะ string
== เท่ากับ
!==ไม่เท่ากับ
> น้อยกว่า
>=น้อยกว่าหรือเท่ากับ
< มากกว่า
<= มากกว่าหรือเท่ากับ

&& และ
|| หรือ
! not 

while
for = shorthand ของ while

function = ใส่สิ่งที่เหมือนกัน รวมเข้าไปในคำสั่งใหม่
*/

// object function

let students = [
{
    name: 'ter',
    score: 30,
    grade: 'f'

},
{
    name: 'tangkwa rak ter',
    score: 60,
    grade: 'B'

},
{
    name: 'champ',
    score: 90,
    grade: 'A+++'

}
]

let student = students.find((s) => {
 if (s.name == 'tangkwa') {
    return true
 }
})

let hightscore_student = students.filter((s)=> {if (s.score >= 60) {return true}
})

console.log('student:', students) 
console.log('hightscore_student', hightscore_student)
