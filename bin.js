<GiftedChat
  // onLoadEarlier={() => { }}
  // isLoadingEarlier={true}
  // renderAvatar={null} // remove to show avatar
  messagesContainerStyle={styles.messagesContainerStyle}
  messages={messages}
  onSend={message => onSend(message)}
  user={{_id: 1}}
  placeholder="Message..."
  alwaysShowSend
  renderInputToolbar={props => null}
  // renderInputToolbar={props => {
  //   return (
  //     <InputToolbar
  //       {...props}
  //       containerStyle={[styles.containerStyle]}
  //       primaryStyle={[
  //         styles.inputToolbarContainer,
  //         // {backgroundColor: theme?.bg_1},
  //       ]}
  //       // renderActions={() => (
  //       //   <View
  //       //     style={{
  //       //       height: 44,
  //       //       justifyContent: 'center',
  //       //       alignItems: 'center',
  //       //       left: 5,
  //       //     }}>
  //       //     <SendIcon width={24} height={24} fill={theme?.btn_bg} />
  //       //   </View>
  //       // )}
  //     />
  //   );
  // }}
  // renderSend={props => {
  //   const isSendDisabled = !props.text;
  //   return (
  //     <Send
  //       {...props}
  //       disabled={isSendDisabled}
  //       containerStyle={styles.sendContainer}>
  //       <TouchableOpacity
  //         disabled={isSendDisabled}
  //         onPress={() => {
  //           const trimmedText = props.text?.trim() ?? '';
  //           if (props.onSend) {
  //             props.onSend({text: trimmedText}, true);
  //           }
  //         }}>
  //         <SendIcon
  //           width={24}
  //           height={24}
  //           fill={isSendDisabled ? theme?.gray : theme?.btn_bg}
  //         />
  //       </TouchableOpacity>
  //     </Send>
  //   );
  // }}
  bottomOffset={insets.bottom}
  maxComposerHeight={100}
  // textInputProps={styles.composer}
/>;
