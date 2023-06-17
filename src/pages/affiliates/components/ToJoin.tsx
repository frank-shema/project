
interface ToJoinProps {
        body: string
        label: string;
        number: number
}

const ToJoin: React.FC<ToJoinProps> = ({ body, label }) => {
        return (
                <div className="w-[100%]  shadow-md relative p-6 mt-5">
                        <svg className="absolute right-0 top-0 h-[100%]" xmlns="http://www.w3.org/2000/svg" width="86" height="172" viewBox="0 0 86 172" fill="none">
                                <path d="M43.125 172H85.8984V0H43.0078L0 29.799V67.2266L42.3047 38.3812H43.125V172Z" fill="#2D66EE" fill-opacity="0.04" />
                        </svg>
                        <div className="flex flex-row gap-6 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <path d="M33.7501 20.6895L32.7804 19.7197L31.7198 20.7802L33.2198 22.2802C33.3605 22.4208 33.5512 22.4998 33.7501 22.4998C33.949 22.4998 34.1397 22.4208 34.2804 22.2802L37.2804 19.2802L36.2199 18.2197L33.7501 20.6895Z" fill="#2D66EE" />
                                        <path d="M33.7501 26.6895L32.7804 25.7197L31.7198 26.7802L33.2198 28.2802C33.3605 28.4208 33.5512 28.4998 33.7501 28.4998C33.949 28.4998 34.1397 28.4208 34.2804 28.2802L37.2804 25.2802L36.2199 24.2197L33.7501 26.6895Z" fill="#2D66EE" />
                                        <path d="M33.7501 33.4395L32.7804 32.4697L31.7198 33.5302L33.2198 35.0302C33.3605 35.1708 33.5512 35.2498 33.7501 35.2498C33.949 35.2498 34.1397 35.1708 34.2804 35.0302L37.2804 32.0302L36.2199 30.9697L33.7501 33.4395Z" fill="#2D66EE" />
                                        <path d="M42.75 15.75H37.5V8.25C37.4982 7.65381 37.2606 7.08255 36.839 6.66098C36.4175 6.2394 35.8462 6.00178 35.25 6H27.75V5.25C27.7482 4.65381 27.5106 4.08255 27.089 3.66098C26.6675 3.23941 26.0962 3.00178 25.5 3H24V2.25C24 2.05109 23.921 1.86032 23.7803 1.71967C23.6397 1.57902 23.4489 1.5 23.25 1.5H17.25C17.0511 1.5 16.8603 1.57902 16.7197 1.71967C16.579 1.86032 16.5 2.05109 16.5 2.25V3H15C14.4038 3.00178 13.8325 3.23941 13.411 3.66098C12.9894 4.08255 12.7518 4.65381 12.75 5.25V6H5.25C4.65381 6.00178 4.08255 6.2394 3.66098 6.66098C3.23941 7.08255 3.00178 7.65381 3 8.25V44.25C3.00178 44.8462 3.23941 45.4175 3.66098 45.839C4.08255 46.2606 4.65381 46.4982 5.25 46.5H35.25C35.8462 46.4982 36.4175 46.2606 36.839 45.839C37.2606 45.4175 37.4982 44.8462 37.5 44.25V38.25H42.75C43.3462 38.2482 43.9175 38.0106 44.339 37.589C44.7606 37.1675 44.9982 36.5962 45 36V18C44.9982 17.4038 44.7606 16.8325 44.339 16.411C43.9175 15.9894 43.3462 15.7518 42.75 15.75ZM24 4.5H25.5C25.6989 4.5 25.8897 4.57902 26.0303 4.71967C26.171 4.86032 26.25 5.05109 26.25 5.25V6H24V4.5ZM24 7.5H35.25C35.4489 7.5 35.6397 7.57902 35.7803 7.71967C35.921 7.86032 36 8.05109 36 8.25V15.75H35.25V9C35.25 8.80109 35.171 8.61032 35.0303 8.46967C34.8897 8.32902 34.6989 8.25 34.5 8.25H24V7.5ZM18 3H22.5V9C22.5 9.19891 22.421 9.38968 22.2803 9.53033C22.1397 9.67098 21.9489 9.75 21.75 9.75H18.75C18.5511 9.75 18.3603 9.67098 18.2197 9.53033C18.079 9.38968 18 9.19891 18 9V3ZM16.635 9.75C16.7907 10.1871 17.0772 10.5655 17.4557 10.8339C17.8341 11.1023 18.2861 11.2476 18.75 11.25H21.75C22.2139 11.2476 22.6659 11.1023 23.0443 10.8339C23.4228 10.5655 23.7093 10.1871 23.865 9.75H33.75V15.75H30.75C30.1538 15.7518 29.5825 15.9894 29.161 16.411C28.7394 16.8325 28.5018 17.4038 28.5 18V36C28.5018 36.5962 28.7394 37.1675 29.161 37.589C29.5825 38.0106 30.1538 38.2482 30.75 38.25H33.75V42.75H6.75V9.75H16.635ZM14.25 5.25C14.25 5.05109 14.329 4.86032 14.4697 4.71967C14.6103 4.57902 14.8011 4.5 15 4.5H16.5V6H14.25V5.25ZM36 44.25C36 44.4489 35.921 44.6397 35.7803 44.7803C35.6397 44.921 35.4489 45 35.25 45H5.25C5.05109 45 4.86032 44.921 4.71967 44.7803C4.57902 44.6397 4.5 44.4489 4.5 44.25V8.25C4.5 8.05109 4.57902 7.86032 4.71967 7.71967C4.86032 7.57902 5.05109 7.5 5.25 7.5H16.5V8.25H6C5.80109 8.25 5.61032 8.32902 5.46967 8.46967C5.32902 8.61032 5.25 8.80109 5.25 9V43.5C5.25 43.6989 5.32902 43.8897 5.46967 44.0303C5.61032 44.171 5.80109 44.25 6 44.25H34.5C34.6989 44.25 34.8897 44.171 35.0303 44.0303C35.171 43.8897 35.25 43.6989 35.25 43.5V38.25H36V44.25ZM43.5 36C43.5 36.1989 43.421 36.3897 43.2803 36.5303C43.1397 36.671 42.9489 36.75 42.75 36.75H30.75C30.5511 36.75 30.3603 36.671 30.2197 36.5303C30.079 36.3897 30 36.1989 30 36V18C30 17.8011 30.079 17.6103 30.2197 17.4697C30.3603 17.329 30.5511 17.25 30.75 17.25H42.75C42.9489 17.25 43.1397 17.329 43.2803 17.4697C43.421 17.6103 43.5 17.8011 43.5 18V36Z" fill="#2D66EE" />
                                        <path d="M37.5 20.25H42V21.75H37.5V20.25Z" fill="#2D66EE" />
                                        <path d="M37.5 26.25H42V27.75H37.5V26.25Z" fill="#2D66EE" />
                                        <path d="M37.5 33H42V34.5H37.5V33Z" fill="#2D66EE" />
                                        <path d="M19.5 17.25H24C24.1989 17.25 24.3897 17.171 24.5303 17.0303C24.671 16.8897 24.75 16.6989 24.75 16.5V15.75H27V14.25H24.75V13.5C24.75 13.3011 24.671 13.1103 24.5303 12.9697C24.3897 12.829 24.1989 12.75 24 12.75H19.5C19.3011 12.75 19.1103 12.829 18.9697 12.9697C18.829 13.1103 18.75 13.3011 18.75 13.5V14.25H14.25V13.5C14.25 13.3011 14.171 13.1103 14.0303 12.9697C13.8897 12.829 13.6989 12.75 13.5 12.75H9C8.80109 12.75 8.61032 12.829 8.46967 12.9697C8.32902 13.1103 8.25 13.3011 8.25 13.5V16.5C8.25 16.6989 8.32902 16.8897 8.46967 17.0303C8.61032 17.171 8.80109 17.25 9 17.25H10.5V20.25H9C8.80109 20.25 8.61032 20.329 8.46967 20.4697C8.32902 20.6103 8.25 20.8011 8.25 21V24C8.25 24.1989 8.32902 24.3897 8.46967 24.5303C8.61032 24.671 8.80109 24.75 9 24.75H10.5V27.75H9C8.80109 27.75 8.61032 27.829 8.46967 27.9697C8.32902 28.1103 8.25 28.3011 8.25 28.5V31.5C8.25 31.6989 8.32902 31.8897 8.46967 32.0303C8.61032 32.171 8.80109 32.25 9 32.25H10.5V35.25H9C8.80109 35.25 8.61032 35.329 8.46967 35.4697C8.32902 35.6103 8.25 35.8011 8.25 36V39C8.25 39.1989 8.32902 39.3897 8.46967 39.5303C8.61032 39.671 8.80109 39.75 9 39.75H13.5C13.6989 39.75 13.8897 39.671 14.0303 39.5303C14.171 39.3897 14.25 39.1989 14.25 39V38.25H18.75V39C18.75 39.1989 18.829 39.3897 18.9697 39.5303C19.1103 39.671 19.3011 39.75 19.5 39.75H24C24.1989 39.75 24.3897 39.671 24.5303 39.5303C24.671 39.3897 24.75 39.1989 24.75 39V38.25H27V36.75H24.75V36C24.75 35.8011 24.671 35.6103 24.5303 35.4697C24.3897 35.329 24.1989 35.25 24 35.25H19.5C19.3011 35.25 19.1103 35.329 18.9697 35.4697C18.829 35.6103 18.75 35.8011 18.75 36V36.75H14.25V36C14.25 35.8011 14.171 35.6103 14.0303 35.4697C13.8897 35.329 13.6989 35.25 13.5 35.25H12V32.25H13.5C13.6989 32.25 13.8897 32.171 14.0303 32.0303C14.171 31.8897 14.25 31.6989 14.25 31.5V28.5C14.25 28.3011 14.171 28.1103 14.0303 27.9697C13.8897 27.829 13.6989 27.75 13.5 27.75H12V24.75H13.5C13.6989 24.75 13.8897 24.671 14.0303 24.5303C14.171 24.3897 14.25 24.1989 14.25 24V23.25H18.75V24C18.75 24.1989 18.829 24.3897 18.9697 24.5303C19.1103 24.671 19.3011 24.75 19.5 24.75H21V27.75H19.5C19.3011 27.75 19.1103 27.829 18.9697 27.9697C18.829 28.1103 18.75 28.3011 18.75 28.5V31.5C18.75 31.6989 18.829 31.8897 18.9697 32.0303C19.1103 32.171 19.3011 32.25 19.5 32.25H24C24.1989 32.25 24.3897 32.171 24.5303 32.0303C24.671 31.8897 24.75 31.6989 24.75 31.5V30.75H27V29.25H24.75V28.5C24.75 28.3011 24.671 28.1103 24.5303 27.9697C24.3897 27.829 24.1989 27.75 24 27.75H22.5V24.75H24C24.1989 24.75 24.3897 24.671 24.5303 24.5303C24.671 24.3897 24.75 24.1989 24.75 24V23.25H27V21.75H24.75V21C24.75 20.8011 24.671 20.6103 24.5303 20.4697C24.3897 20.329 24.1989 20.25 24 20.25H19.5C19.3011 20.25 19.1103 20.329 18.9697 20.4697C18.829 20.6103 18.75 20.8011 18.75 21V21.75H14.25V21C14.25 20.8011 14.171 20.6103 14.0303 20.4697C13.8897 20.329 13.6989 20.25 13.5 20.25H12V17.25H13.5C13.6989 17.25 13.8897 17.171 14.0303 17.0303C14.171 16.8897 14.25 16.6989 14.25 16.5V15.75H18.75V16.5C18.75 16.6989 18.829 16.8897 18.9697 17.0303C19.1103 17.171 19.3011 17.25 19.5 17.25ZM20.25 14.25H23.25V15.75H20.25V14.25ZM20.25 36.75H23.25V38.25H20.25V36.75ZM23.25 29.25V30.75H20.25V29.25H23.25ZM20.25 21.75H23.25V23.25H20.25V21.75ZM12.75 36.75V38.25H9.75V36.75H12.75ZM12.75 29.25V30.75H9.75V29.25H12.75ZM12.75 21.75V23.25H9.75V21.75H12.75ZM12.75 15.75H9.75V14.25H12.75V15.75Z" fill="#2D66EE" />
                                </svg>
                                <p className="">{label}</p>
                        </div>
                        <p className="text-xs">{body}</p>
                </div>
        )
}

export default ToJoin