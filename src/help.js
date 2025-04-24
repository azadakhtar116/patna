// 1 .  Filter between 2 arrays

// const str = 'Mango is good fruits'
// const result = str.split(' ').reverse().join(' ')

// console.log(result)

// const words = 'Mango is good fruits fruits fruits fruits fruits fruits'
// const makeArray = words.split(' ')
// const findWord = makeArray.filter(item => item === 'fruits')

// const donors = [
//     { name: 'Azad', blood_group: 'ab+' },
//     { name: 'Azad1', blood_group: 'b+' },
//     { name: 'Azad2', blood_group: 'ab-' },
//     { name: 'Azad3', blood_group: 'a+' },
//     { name: 'Azad4', blood_group: 'a-' },
//     { name: 'Azad5', blood_group: 'o' }
// ]

// const acceptors = [
//     { blood_group: 'ab+' },
//     { blood_group: 'b+' },
//     { blood_group: 'a+' }
// ]

// const commonData = donors.filter(donor => acceptors.some(acceptor => acceptor.blood_group == donor.blood_group))
// /* console.log(commonData)  */

// const str = 'Mango is good fruits'
// const result = str.split(' ').reverse().join(' ')
// /* console.log(str.split(' ').reverse().join(' ')) */

// SUM OF ARRAY VALUE
// const sum = data.reduce((partialSum, item) => partialSum + item?.price, 0);

// // PUCS OBJECT IN ARRAY
// const data = [...cartData, item]

// /* console.log(result)
//  */
// const words = 'Mango is good fruits fruits fruits fruits fruits fruits'
// const makeArray = words.split(' ')

// const findWord = makeArray.filter(item => item === 'fruits')

// /* console.log(findWord.join(' ')) */
// /* console.log(findWord.length) */

// const str_multi = 'Mango is good fruits fruits fruits fruits fruits'
// const make_new_array = str_multi.split(' ')
// console.log(make_new_array)

// const findCommonData = make_new_array.filter(item => item === 'fruits')
// console.log(findCommonData.length)
// console.log(findCommonData.join(' '))

// Push data object in array

// const resData = [{ month: 'Jan' }, { month: 'Feb' }]
// const month_name = []

// resData.forEach((item) => {
//     /* console.log(item) */
//     if (item.month) {
//         month_name.push(item.month)
//     }
// })

// console.log(month_name)


// 2. Index Wise

// function createButtons() {
//     for (var i = 1; i <= 5; i++) {
//         var body = document.getElementsByTagName("BODY")[0];
//         var button = document.createElement("BUTTON");
//         button.innerHTML = 'Button ' + i;
//         button.onclick = function () {
//             alert('This is button ' + i);
//         }
//         body.appendChild(button);
//     }
// }
// createButtons();

// onKeyPress={(e) => checkSpecial(e)}

// const checkSpecial = (e) => {
//         const value = e?.target?.value
//         console.log(value, e)
//         const regex = new RegExp("^[a-zA-Z0-9_]+$");
//         const str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
//         if (regex.test(str)) {
//             return true;
//         }
//         e.preventDefault();
//         return false;
//     }

// onChange={(e) => handleCategory}
//     const handleCategory = (e) => {
//         console.log('cate', e, e?.target?.value, e?.value)
//         setCategory()
//     }

// SUM OF ARRAY VALUE
// const sum = data.reduce((partialSum, item) => partialSum + item?.price, 0);

// PUCS OBJECT IN ARRAY
// const data = [...cartData, item]

// 
// yarn add html-react-parser https://yarnpkg.com/package/html-react-parser

// window.open(result.data)
// const file= {window.URL.createObjectURL(blobContent)}

// .rdt_TableHeadRow {
//   white-space: pre-line !important;
//   overflow: inherit !important;
//   text-align: center !important;
// }
// .react-dataTable .custom-table { padding-bottom: 150px;}
// .custom-hover:hover { cursor: pointer;}
// .rdt_TableCol .rdt_TableCol_Sortable div { white-space: pre-line !important; }


// <Col lg={{ span: 8, offset: 2 }} className='pt-2 mb-5'></div>
// Get key 
// formData.get("username"); /

// setFreshList
// dispatch(setFreshList(true))

// if (programme_images && programme_images?.length > 0) {
//     console.log('images', programme_images)
//     programme_images.map((element, index) => (data.append(`images[${index}]`, element)))
// }

//                 if (programme_images?.length > 0) {
//                     data.append(`images[${0}]`, programme_images[0])
// programme_images?.forEach((item, index) => {
//     if (item.name) {
//         data.append(`images[${index}]`, item)
//     }
// })
//                 }

// selectFreshData
// const checkFreshTable = useSelector(selectFreshData)
// useEffect(() => {
//         if (checkFreshTable === true) {
//             fetchData(pageCount)
//         }

//     }, [checkFreshTable])


// onClick={() => payNow(row)}

// { defaultValues: { name: '' } },

// style={{ whiteSpace: 'break-spaces', marginTop: '6px', marginBlock: '6px' }}

// setFreshList: (state, action) => {
//             state.isFreshData = action.payload
//         },

// const checkFreshTable = useSelector(selectFreshData)
//  dispatch(setFreshList(false))

// setFreshList
// export const selectFreshData = (state) => state.category.isFreshData

// localStorage.setItem('editData', JSON.stringify(tableRecord))

// .catch((error) => {
//             setLoading(false)
//             console.log('MyError', error.response.data.message)
//             toast.success(error.response.data.message)
//         });


// if (list.length > 0) {
//         list.forEach((item) => {
//           if (item.other_services) {
//             console.log('Inner', item.other_services)
//             listOther.push(item.other_services)
//           }
//         })
//         console.log('listOther', listOther)
//       }

// const selectType = (e) => {
//     const selectedMyType = e?.value
//     setType(selectedMyType)
// }


// {
//     name: 'Type',
//     selector: (row) => {
//         let showData = ''
//         if (row.type === 'sneaker') {
//             showData = <Badge color='success'>Sneaker</Badge>
//         } else if (row.type === 'apparel') {
//             showData = <Badge color='primary'>Apperial</Badge>
//         } else if (row.type === 'addOn') {
//             showData = <Badge color='info'>addOn</Badge>
//         }
//         return (showData)
//     },
// },

// const DeletedArrays = this.myComboProducts.filter(
//           itemInArray => itemInArray.id !== ComboId,
//         )

// const formData = new FormData()
//         formData.append('name', data?.name)
//         formData.append('country_id', selectedCountry.value)
//         formData.append('_method', 'PUT')

// if (getImage.length > 0) {
//             getImage.map((element, index) => (
//                 formData.append(`cylinder_images[index]`, element)
//             ))
//         }

//  const handleIncomeCategory = () => {
//         console.log('income', selectedIncome)
//         if (selectedIncome.value) {
//             handleUpdateIncome()
//         }
//     }

//     const handleIncomeCategory = (e) => {
//         console.log('e', e) // object here
//         setIncome(e)
//         if (selectedIncome.value) {
//             console.log('income', selectedIncome)
//             // handleUpdateIncome()
//         }
//     }


// Set Data DropDown
// setLocalAddress(result?.data?.data?.locality_list.map((item, key) => ({ value: item.id, label: item.name })))
//  const resultCategory = result?.data?.data?.saleAgents?.data?.map((item) => ({ value: item.id, label: item.name }))
//             const allOptions = [{ value: '', label: 'All' }]
//             const finalDrop = allOptions.concat(resultCategory)
//             dispatch(setAgentList(finalDrop))


// Filter
// if (countryId) {
//                         const resultCountry = countries.filter(itemInArray => itemInArray.value === countryId,)
//                         if (resultCountry.length > 0) {
//                             setSelectedCountry({ value: resultCountry[0].value, label: resultCountry[0].label })
//                         }
//                     }

// this.variations.map((element, index) => {
//         formData.append(`variations[${index}][name]`, element.name)
//         element.variants.map((element2, index2) => {
//           formData.append(`variations[${index}][variants][${index2}][name]`, element2.name)
//         })
//       })

// this.productIds.map((element, index) => {
//         formData.append(`products[${index}][id]`, element.id)
//       })

// if (shopTimes.length > 0) {
//             shopTimes.map((element, index) => (
//                 formData.append(`operational_hours[${index}][day]`, element.day),
//                 formData.append(`operational_hours[${index}][start_time]`, element.start_time),
//                 formData.append(`operational_hours[${index}][close_time]`, element.close_time),
//                 formData.append(`operational_hours[${index}][is_open]`, element.is_open)
//             ))
//         }


// {topCoachList.length > 0 ? topCoachList.map((item, index) => {
//                         return (
//                             <div key={index}>
//                                 {item?.sub_coaches.map((subItems, sIndex) => {
//                                     return <Fragment>
//                                         <Col lg={3} md={3} sm={12} className='customBox' key={sIndex}>
//                                             <Card style={{}} className='mb-5 border-2 session-box border-light'>
//                                                 <Card.Img variant="top" src={item?.image} />
//                                                 <Card.Body>
//                                                     <Card.Text>
//                                                         {subItems?.description}
//                                                     </Card.Text>
//                                                     <Card.Title className='mb-5'>
//                                                         <p className='' color='#363F72'>{subItems?.name}</p>
//                                                     </Card.Title>
//                                                     <Card.Text><div className='certificate w-75'>{subItems?.certificate}</div></Card.Text>

//                                                     <div className=‘d-flex flex-row justify-content-between align-items-center’>
//                                                         <div><p className='mb-0 fs-14'> 03 <span>Sessions</span></p></div>
//                                                         {/* <div><p className='mb-0 fs-14'> <img src={subItems?.iconUser} alt='coach' width='17' /> 20 <span>Students</span></p></div> */}
//                                                     </div>
//                                                 </Card.Body>
//                                             </Card>
//                                         </Col>
//                                     </Fragment>
//                                 })}
//                             </div>
//                         );
//                     }) : ''}

//  const handleCloseModal() = () => {
//         setShow(false)
//        setPaidAmount(‘’). // reset your values

//     }

// <Modal isOpen={show}
//                     toggle={() => {
//                         setShow(!show)
//                         dispatch(setResponse({}))
//                     }}
// onClick={() => {
//     handleCloseModal()
// }}
// </Modal>


//                 {/* {sessionList.map((item, index) => {
//                         return (
//                             <ul key={`ul-${index}`}>
//                                 {item?.frequency.map((subItems, sIndex) => {
//                                     return <li key={`li-${sIndex}`}> {subItems} </li>;
//                                 })}
//                             </ul>
//                         );
//                     })} */}


// const [time, setTime] = useState('')
//     const [date, setDate] = useState('')

//     if (yourDateVariable) {
//         setDate(moment(yourDateVariable).format('YYYY-MM-DD'))
//         setTime(moment(yourDateVariable).format('HH:mm'))
//     }
//    const [time, setTime] = useState('')
//     const [date, setDate] = useState('')

//     if (yourDateVariable) {
//         setDate(moment(yourDateVariable).format('YYYY-MM-DD'))
//         setTime(moment(yourDateVariable).format('HH:mm'))
//     }


//  const handleAddSession = () => {
//         setMySession([...all_session, { date: '', location: '', latitude: '', longitude: '' }])
//         // console.log('all_session', all_session)
//     }
//     const handleRemoveSession = (index1) => {
//         const temp = [...all_session]
//         const deleteVal = [...temp]
//         deleteVal.splice(index1, 1)
//         setMySession(deleteVal)
//     }

//     const handleStartDateChange = (date, index1) => {

//         const startDate = date.length > 0 ? moment(date[0]).format('YYYY-MM-DD') : ''
//         const temp = [...all_session]
//         const name = 'dob'
//         if (temp?.length > 0 && temp[index1]) {
//             temp[index1][name] = startDate
//             setMySession(temp)
//         } else {

//         }
//     }

//     const handleName = (e, index1) => {
//         console.log(e?.target)
//         const { name, value } = e?.target
//         const temp = [...all_session]
//         if (temp?.length > 0 && temp[index1]) {
//             temp[index1][name] = value
//             setMySession(temp)
//         }
//     }

//     const handlePhone = (e, index1) => {
//         console.log(e?.target)
//         const { name, value } = e?.target
//         const temp = [...all_session]
//         if (temp?.length > 0 && temp[index1]) {
//             temp[index1][name] = value
//             setMySession(temp)
//         }
//     }

//     const handleEmail = (e, index1) => {
//         console.log(e?.value, e?.target)
//         const { name, value } = e?.target
//         const temp = [...all_session]
//         if (temp?.length > 0 && temp[index1]) {
//             temp[index1][name] = value
//             setMySession(temp)
//         }
//     }

//     const handleSelectGender = (e, index1) => {
//         console.log('e', e)
//         const { value } = e
//         const name = 'gender'
//         const temp = [...all_session]
//         if (temp?.length > 0 && temp[index1]) {
//             temp[index1][name] = value
//             setMySession(temp)
//         }
//     }




{/* <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
    manage columns
<div className="grid grid-cols-12">
<div className="col-span-2"></div>
<div className="col-span-7"></div>
<div className="col-span-3"></div>
</div> */}

// create row wise grid
// <div className="grid grid-flow-col grid-rows-12">
//     <div></div>
//     <div></div>
//     <div></div>
// </div>

{/* <div className="flex items-center justify-center p-10"><div>Start adding products</div></div> */ }


// "no-unused-vars":[
//             "error",
//             {
//                 "varsIgnorePattern": "React"
//             }
//         ]

Grid: https://tailwindcss.com/docs/grid-template-columns

// Setup react - vite tailwind
// https://stackblitz.com/edit/daisyui-react-vite

// 1- npm create vite@latest   / https://vite.dev/guide/

// Npm create vite@latest
// Project name
// React
// Javascript + SWC

// Install tailwind  / https://dev.to/ayushdev_24/building-a-modal-using-reactjs-and-tailwindcss-38d0
// install -D tailwinds postcss autoprefixer
// npx tailwindcss init


// * npm install tailwind css from website. / https://tailwindcss.com/docs/installation/using-vite
// * npx tailwindcss-cli@latest init. / npx tailwinds init -p
// * Npm install axios
// - npm  web-vitals
// -  
// -  npm install react-redux
// -  npm @reduxjs/toolkit
// -  npm install react-hook-form
// -  npm @hookform/resolvers
// -  npm install yup
// -  npm install react-router-dom
// -  npm install js-cookie
// -  npm install jslint
// - 

// Tailwind Flex  and install guid

// flex justify-between items-center
// flex flex-col items-center justify-center
// flex justify-content-end align-items-center




{/* Tailwind Font Custamize */ }

{/* fontSize: { sm: '0.8rem',      // 13px
        base: '0.875rem',  // 14
        md: '1rem',        // 16px
        lg: '1.25rem',     // 20px
        xl: '1.5rem',      // 24px
        '2xl': '1.688rem', // 27px
        '3xl': '1.938rem', // 31px
        '4xl': '2.438rem', // 39px
        '5xl': '3.063rem', // 49px
      }, */}
